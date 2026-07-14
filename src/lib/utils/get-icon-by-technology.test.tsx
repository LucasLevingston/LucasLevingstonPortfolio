import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { getIconByTechnology } from './get-icon-by-technology'

describe('getIconByTechnology', () => {
  it('returns a plain devicon class for fastify and nextjs', () => {
    expect(getIconByTechnology('fastify')).toEqual({
      iconClassName: 'devicon-fastify-plain',
    })
    expect(getIconByTechnology('nextjs')).toEqual({
      iconClassName: 'devicon-nextjs-plain',
    })
  })

  it('returns a wordmark colored devicon class for sqlite, firebase and docker', () => {
    expect(getIconByTechnology('sqlite')).toEqual({
      iconClassName: 'devicon-sqlite-plain-wordmark colored',
    })
    expect(getIconByTechnology('firebase')).toEqual({
      iconClassName: 'devicon-firebase-plain-wordmark colored',
    })
    expect(getIconByTechnology('docker')).toEqual({
      iconClassName: 'devicon-docker-plain-wordmark colored',
    })
  })

  it('returns an original wordmark devicon class for express, github and prisma', () => {
    expect(getIconByTechnology('express')).toEqual({
      iconClassName: 'devicon-express-original-wordmark',
    })
    expect(getIconByTechnology('github')).toEqual({
      iconClassName: 'devicon-github-original-wordmark',
    })
    expect(getIconByTechnology('prisma')).toEqual({
      iconClassName: 'devicon-prisma-original-wordmark',
    })
  })

  it('returns an imported svg with a dark:invert class for reactnative and expo', () => {
    const reactNative = getIconByTechnology('reactnative')
    expect(reactNative.iconClassName).toBe('dark:invert')
    expect('svg' in reactNative).toBe(true)
    expect(reactNative.element).toBeUndefined()

    const expo = getIconByTechnology('expo')
    expect(expo.iconClassName).toBe('dark:invert')
    expect('svg' in expo).toBe(true)
  })

  it('returns a hardcoded svg url for zustand', () => {
    expect(getIconByTechnology('zustand').svg).toBe(
      'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg'
    )
  })

  it('returns a hardcoded svg url for orval, stripe, zod and vite', () => {
    expect(getIconByTechnology('orval').svg).toBe(
      'https://orval.dev/images/emblem.svg'
    )
    expect(getIconByTechnology('stripe').svg).toBe(
      'https://b.stripecdn.com/manage-statics-srv/assets/public/favicon.ico'
    )
    expect(getIconByTechnology('zod').svg).toBe('https://v3.zod.dev/logo.svg')
    expect(getIconByTechnology('vite').svg).toBe(
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
    )
  })

  it('returns the nextauth svg for the nextauth key (not the misspelled nexauth)', () => {
    const result = getIconByTechnology('nextauth')
    expect('svg' in result).toBe(true)
    expect(result.iconClassName).toBeUndefined()
    expect(result.element).toBeUndefined()
  })

  it('renders a DiScrum element for scrum', () => {
    const { element } = getIconByTechnology('scrum')
    const { container } = render(element)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('.text-lightBlue')).toBeInTheDocument()
  })

  it('renders a REST text element for rest', () => {
    const { element } = getIconByTechnology('rest')
    render(element)
    expect(screen.getByText('REST')).toBeInTheDocument()
  })

  it('renders text elements for yup, nativewind, hibernate and jpa', () => {
    render(getIconByTechnology('yup').element)
    expect(screen.getByText('Yup')).toBeInTheDocument()

    render(getIconByTechnology('nativewind').element)
    expect(screen.getByText('NW')).toBeInTheDocument()

    render(getIconByTechnology('hibernate').element)
    expect(screen.getByText('HB')).toBeInTheDocument()

    render(getIconByTechnology('jpa').element)
    expect(screen.getByText('JPA')).toBeInTheDocument()
  })

  it('returns simple devicon classes for vuejs, css, springboot and githubactions', () => {
    expect(getIconByTechnology('vuejs')).toEqual({
      iconClassName: 'devicon-vuejs-plain colored',
    })
    expect(getIconByTechnology('css')).toEqual({
      iconClassName: 'devicon-css3-plain colored',
    })
    expect(getIconByTechnology('springboot')).toEqual({
      iconClassName: 'devicon-spring-plain colored',
    })
    expect(getIconByTechnology('githubactions')).toEqual({
      iconClassName: 'devicon-githubactions-plain colored',
    })
  })

  it('returns a devicon-based class for dockercompose and jest', () => {
    expect(getIconByTechnology('dockercompose')).toEqual({
      iconClassName: 'devicon-docker-plain-wordmark colored',
    })
    expect(getIconByTechnology('jest')).toEqual({
      iconClassName: 'devicon-jest-plain',
    })
  })

  it('renders text elements for scalar, ddd, ia, excel, java-fundamentals, oop, functional-programming and javafx', () => {
    render(getIconByTechnology('scalar').element)
    expect(screen.getByText('SCL')).toBeInTheDocument()

    render(getIconByTechnology('ddd').element)
    expect(screen.getByText('DDD')).toBeInTheDocument()

    render(getIconByTechnology('ia').element)
    expect(screen.getByText('IA')).toBeInTheDocument()

    render(getIconByTechnology('excel').element)
    expect(screen.getByText('XLS')).toBeInTheDocument()

    render(getIconByTechnology('java-fundamentals').element)
    expect(screen.getByText('JAVA')).toBeInTheDocument()

    render(getIconByTechnology('oop').element)
    expect(screen.getByText('OOP')).toBeInTheDocument()

    render(getIconByTechnology('functional-programming').element)
    expect(screen.getByText('FP')).toBeInTheDocument()

    render(getIconByTechnology('javafx').element)
    expect(screen.getByText('FX')).toBeInTheDocument()
  })

  it('falls back to a generic devicon class for unknown technologies', () => {
    expect(getIconByTechnology('some-unknown-tech')).toEqual({
      iconClassName: 'devicon-some-unknown-tech-plain colored',
    })
  })
})
