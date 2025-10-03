import { FormationType, formationStatus } from '../types/FormationType'

export const formationDataBr: FormationType[] = [
  {
    title: 'Pós-graduação em Desenvolvimento Web',
    institution: 'Faculeste – Faculdade do Leste Mineiro',
    startsDate: 'Outubro/2025',
    endsDate: 'Fevereiro/2026',
    duration: '4 meses',
    currentStatus: formationStatus.IN_PROGRESS,
    graduated: false,
  },
  {
    title: 'Graduação em Ciências da Computação',
    institution: 'Universidade Estadual da Paraíba (UEPB)',
    startsDate: 'Julho/2020',
    endsDate: 'Julho/2025',
    duration: '10 semestres',
    currentStatus: formationStatus.COMPLETED,
    graduated: true,
  },
  {
    title: 'Graduação em Engenharia Civil',
    institution: 'Centro Universitário de Patos (UNIFIP)',
    startsDate: 'Fevereiro/2020',
    endsDate: 'Julho/2020',
    duration: '1 semestre',
    currentStatus: formationStatus.DEFERRED,
    graduated: false,
  },
]

export const formationDataEn: FormationType[] = [
  {
    title: 'Postgraduate in Web Development',
    institution: 'Faculeste – Faculdade do Leste Mineiro',
    startsDate: 'October/2025',
    endsDate: 'February/2026',
    duration: '4 months',
    currentStatus: formationStatus.IN_PROGRESS,
    graduated: false,
  },
  {
    title: 'Bachelor’s Degree in Computer Science',
    institution: 'State University of Paraíba (UEPB)',
    startsDate: 'July/2020',
    endsDate: 'July/2025',
    duration: '10 semesters',
    currentStatus: formationStatus.COMPLETED,
    graduated: true,
  },
  {
    title: 'Bachelor’s Degree in Civil Engineering',
    institution: 'State University of Paraíba (UEPB)',
    startsDate: 'February/2020',
    endsDate: 'July/2020',
    duration: '1 semester',
    currentStatus: formationStatus.DEFERRED,
    graduated: false,
  },
]
