import { jsPDF } from 'jspdf'
import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UserType } from '@/types/UserType'

function formatDate(value?: string | Date) {
  if (!value) return ''
  const d = typeof value === 'string' ? new Date(value) : value
  try {
    return d.toLocaleDateString('pt-BR')
  } catch {
    return String(value)
  }
}

export function PDFButton({ user }: { user: UserType }) {
  const handleGeneratePDF = async () => {
    // Cria um container HTML temporário com spans highlight
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.left = '-9999px'
    container.style.top = '0'
    container.style.width = '800px' // define largura para renderização

    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')

    const name = escapeHtml(user.name || user.completName || 'Currículo')
    const email = escapeHtml(user.email || '-')
    const phone = escapeHtml(user.phone || '-')
    const location = escapeHtml(user.location || '-')
    const address = escapeHtml(user.address || '-')
    const summary = escapeHtml(
      user.professionalProfile || user.description || '-'
    )

    const skills = (user.hardSkills || [])
      .map((s: any) => escapeHtml(s.name ?? String(s)))
      .slice(0, 10)
      .join(', ')

    const experiencesHtml = (user.experiences || [])
      .map((exp: any) => {
        const role = escapeHtml(exp.role || '')
        const enterprise = escapeHtml(exp.enterprise || '')
        const period = `${escapeHtml(formatDate(exp.startsDate))} - ${escapeHtml(
          formatDate(exp.endsDate)
        )}`
        const feats = escapeHtml((exp.features || []).join('; '))
        return `<div class="exp"><div class="role"><span class="highlight">${role}</span> @ <span class="highlight">${enterprise}</span></div><div class="period">${period}</div><div class="feats">${feats}</div></div>`
      })
      .join('')

    container.innerHTML = `
      <style>
        body{font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;}
        .pdf-wrapper{padding:20px;color:#111}
        .title{font-size:20px;font-weight:700;text-align:center;margin-bottom:8px}
        .section{margin-top:12px}
        .section h3{font-size:14px;margin-bottom:6px}
        .highlight{background: #fffa8b; color:#111; padding:2px 4px; border-radius:3px}
        .contact{display:flex;justify-content:space-between}
        .exp{margin-bottom:8px}
        .role{font-weight:600}
        .period{font-size:11px;color:#444}
        .feats{font-size:12px}
      </style>
      <div class="pdf-wrapper">
        <div class="title"><span class="highlight">${name}</span></div>

        <div class="contact">
          <div><strong>Email:</strong> <span class="highlight">${email}</span></div>
          <div><strong>Telefone:</strong> <span class="highlight">${phone}</span></div>
        </div>
        <div class="contact" style="margin-top:6px">
          <div><strong>Local:</strong> ${location}</div>
          <div><strong>Endereço:</strong> ${address}</div>
        </div>

        <div class="section">
          <h3>Resumo Profissional</h3>
          <div>${summary}</div>
        </div>

        <div class="section">
          <h3>Habilidades</h3>
          <div><span class="highlight">${skills || '-'}</span></div>
        </div>

        <div class="section">
          <h3>Experiências</h3>
          ${experiencesHtml || '<div>-</div>'}
        </div>

        <div style="margin-top:20px;font-size:10px;text-align:center;color:#666">Gerado em: ${escapeHtml(
          formatDate(new Date())
        )}</div>
      </div>`

    document.body.appendChild(container)

    const doc = new jsPDF({ unit: 'px', format: 'a4' })

    await doc.html(container, {
      x: 20,
      y: 20,
      html2canvas: { scale: 2, useCORS: true },
      callback: jspdfDoc => {
        const fileName = `curriculo-${(user.name || 'usuario')
          .replace(/\s+/g, '-')
          .toLowerCase()}.pdf`
        jspdfDoc.save(fileName)
        // cleanup
        if (container.parentNode) container.parentNode.removeChild(container)
      },
      width: 560,
    })
  }

  return (
    <Button
      className="flex gap-2"
      onClick={handleGeneratePDF}
      variant="default"
    >
      <div>Gerar PDF</div>
      <FileText className="h-4 w-4" />
    </Button>
  )
}

export default PDFButton
