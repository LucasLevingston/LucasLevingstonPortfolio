import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { useUser } from '@/hooks/user-hooks'

interface PhotoProps {
  className?: string
}

const Photo = ({ className }: PhotoProps) => {
  const { profilePicture } = useUser()
  return (
    <div
      className={twMerge(
        'sm:w-h-44 relative h-[175px] w-[175px] sm:h-44',
        className
      )}
    >
      <motion.div
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.1, ease: 'easeIn' },
        }}
        initial={{ opacity: 0 }}
      >
        <motion.div
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.1, ease: 'easeInOut' },
          }}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
        >
          <img
            alt=""
            className={twMerge(
              'sm:w-h-44 h-[175px] w-[175px] rounded-full object-contain sm:h-44',
              className
            )}
            src={profilePicture}
          />
        </motion.div>
        <motion.svg
          className={twMerge(
            'sm:w-h-44 absolute inset-0 h-[175px] w-[175px] sm:h-44',
            className
          )}
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            className="stroke-mainColor"
            cx="253"
            cy="253"
            initial={{ strokeDasharray: '24 10 0 0 ' }}
            r="250"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
