import type { TypewriterClass } from 'typewriter-effect'

// Module-scoped so the typewriter receives a stable onInit callback.
export function typeRoles(typewriter: TypewriterClass) {
  typewriter
    .typeString('Full-Stack Developer')
    .pauseFor(5000)
    .deleteChars(20)
    .typeString('Front-End Developer')
    .pauseFor(5000)
    .deleteChars(19)
    .typeString('Back-End Developer')
    .pauseFor(5000)
    .deleteChars(18)
    .typeString('Full-Stack Developer')
    .start()
}
