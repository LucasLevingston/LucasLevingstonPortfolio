// import html2canvas from 'html2canvas-pro'
// import { jsPDF } from 'jspdf'
// import { createRoot } from 'react-dom/client'
// import ResumePDF from '@/components/custom/resume-pdf'
// import { UserType } from '@/types/UserType'

// export async function generatePDF(user: UserType): Promise<void> {
//   if (typeof document === 'undefined') return

//   const container = document.createElement('div')
//   container.style.position = 'absolute'
//   container.style.left = '-9999px'
//   container.style.top = '0'
//   container.style.background = 'white'
//   document.body.appendChild(container)

//   const root = createRoot(container)
//   root.render(<ResumePDF user={user} />)

//   // Wait for fonts to be ready (if any) and images to load
//   try {
//     await (document.fonts?.ready ?? Promise.resolve())
//   } catch (err) {
//     // fonts.ready failed or not supported — proceed anyway
//     // eslint-disable-next-line no-console
//     console.warn('generetePDF: document.fonts.ready failed', err)
//   }

//   const waitForImages = () =>
//     new Promise<void>(resolve => {
//       const imgs = container.querySelectorAll('img')
//       if (imgs.length === 0) return resolve()
//       let loaded = 0
//       for (const img of imgs) {
//         const i = img as HTMLImageElement
//         if (i.complete) {
//           loaded++
//         } else {
//           i.addEventListener('load', () => {
//             loaded++
//             if (loaded === imgs.length) resolve()
//           })
//           i.addEventListener('error', () => {
//             loaded++
//             if (loaded === imgs.length) resolve()
//           })
//         }
//       }
//     })

//   await waitForImages()
//   // small delay to ensure layout/styling applied
//   await new Promise(r => setTimeout(r, 100))

//   const canvas = await html2canvas(container, { scale: 2, useCORS: true })
//   const imgData = canvas.toDataURL('image/png')

//   const pdf = new jsPDF({
//     orientation: 'portrait',
//     unit: 'px',
//     format: 'a4',
//   })

//   const pdfWidth = pdf.internal.pageSize.getWidth()
//   const pdfHeight = pdf.internal.pageSize.getHeight()
//   const imgWidth = pdfWidth
//   const imgHeight = (canvas.height * imgWidth) / canvas.width

//   let heightLeft = imgHeight
//   let position = 0

//   pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
//   heightLeft -= pdfHeight

//   while (heightLeft > 0) {
//     position = heightLeft - imgHeight
//     pdf.addPage()
//     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
//     heightLeft -= pdfHeight
//   }

//   pdf.save('document.pdf')

//   root.unmount()
//   document.body.removeChild(container)
// }
