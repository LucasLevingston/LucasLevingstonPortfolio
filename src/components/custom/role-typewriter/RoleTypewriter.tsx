import Typewriter from 'typewriter-effect'

export function RoleTypewriter() {
  return (
    <Typewriter
      onInit={typewriter => {
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
      }}
    />
  )
}
