// This was formerly an axios client that fetched data from the API.
// Now it's just a static client that fetches data from the static data files.
// It still provides the original interface of async getters for the 
// data to allow for future dynamic data.
// This is the single connection point to the rest of the monorepo - other
// modules should not import from the shared data directory directly.

import type {
  Education,
  WorkExperience,
  Language,
  Award,
  RelevantCoursework,
  ResearchInterest,
  Teaching,
  Extracurricular,
  PersonalInfo,
  Publication,
} from '@/types'

// Import static data from the shared data directory
import { EDUCATION } from '../../shared/data/education'
import { WORK_EXPERIENCE } from '../../shared/data/workExperience'
import { LANGUAGES } from '../../shared/data/languages'
import { AWARDS } from '../../shared/data/awards'
import { RELEVANT_COURSEWORK } from '../../shared/data/relevantCoursework'
import { RESEARCH_INTERESTS } from '../../shared/data/researchInterests'
import { TEACHING } from '../../shared/data/teaching'
import { EXTRACURRICULARS } from '../../shared/data/extracurricular'
import { PERSONAL_INFO } from '../../shared/data/personalInfo'
import { PUBLICATIONS } from '../../shared/data/publications'

const dateToString = (date: Date | undefined): string | undefined => {
  return date ? date.toISOString().split('T')[0] : undefined
}

const convertEducation = (data: typeof EDUCATION): Education[] => {
  return data.map(item => ({
    ...item,
    startDate: dateToString(item.startDate),
    graduationDate: dateToString(item.graduationDate),
    trueEndDate: dateToString(item.trueEndDate),
  }))
}

const convertWorkExperience = (data: typeof WORK_EXPERIENCE): WorkExperience[] => {
  return data.map(item => ({
    ...item,
    startDate: dateToString(item.startDate) || '',
    endDate: dateToString(item.endDate),
    responsibilities: item.achievements || [item.description],
    description: item.description,
  }))
}

const convertLanguages = (data: typeof LANGUAGES): Language[] => {
  return data.map(item => ({
    ...item,
    certifications: item.certifications?.map(cert => ({
      ...cert,
      date: dateToString(cert.date) || '',
    })),
  }))
}

const convertAwards = (data: typeof AWARDS): Award[] => {
  return data.map(item => ({
    ...item,
    date: dateToString(item.date),
    instances: item.instances?.map(instance => ({
      ...instance,
      date: dateToString(instance.date) || '',
    })),
  }))
}

const convertTeaching = (data: typeof TEACHING): Teaching[] => {
  return data.map(item => ({
    ...item,
    startDate: dateToString(item.startDate) || '',
    endDate: dateToString(item.endDate),
  }))
}

const convertPublications = (data: typeof PUBLICATIONS): Publication[] => {
  return data.map(item => ({
    ...item,
    year: String(item.year),
    authors: item.authors.map(author => ({
      ...author,
      isUser: author.isUser ?? false,
    })),
  }))
}

class StaticDataClient {
  getEducation = async (): Promise<Education[]> => {
    return convertEducation(EDUCATION)
  }

  getWorkExperience = async (): Promise<WorkExperience[]> => {
    return convertWorkExperience(WORK_EXPERIENCE)
  }

  getLanguages = async (): Promise<Language[]> => {
    return convertLanguages(LANGUAGES)
  }

  getAwards = async (): Promise<Award[]> => {
    return convertAwards(AWARDS)
  }

  getRelevantCoursework = async (): Promise<RelevantCoursework[]> => {
    return RELEVANT_COURSEWORK
  }

  getResearchInterests = async (): Promise<ResearchInterest[]> => {
    return [{ text: RESEARCH_INTERESTS.text, showInCV: RESEARCH_INTERESTS.showInCV }]
  }

  getTeaching = async (): Promise<Teaching[]> => {
    return convertTeaching(TEACHING)
  }

  getExtracurricular = async (): Promise<Extracurricular[]> => {
    return EXTRACURRICULARS
  }

  getPersonalInfo = async (): Promise<PersonalInfo[]> => {
    return [PERSONAL_INFO]
  }

  getPublications = async (): Promise<Publication[]> => {
    return convertPublications(PUBLICATIONS)
  }

  getHealth = async (): Promise<{ status: string; timestamp: string }> => {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString()
    }
  }
}

export const apiClient = new StaticDataClient()