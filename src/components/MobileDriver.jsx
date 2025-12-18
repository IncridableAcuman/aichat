import {AnimatePresence,motion} from 'framer-motion';

const MobileDriver = ({open,onCLose,aside="left",children}) => {
  return (
    <>
    <AnimatePresence>
        {open && (
            <>
            <motion.div 
            className='fixed inset-0 bg-black/50 z-40'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={() => onCLose(false)}
            />

            <motion.aside
            className={`fixed ${aside === 'left' ? 'left-0' : 'right-0'} z-50 w-64 h-full bg-gray-100`}
            initial={{x:aside==='left' ? '-100%' : '100%'}}
            animate={{x:0}}
            exit={{x:aside==='ledt' ? '-100%' : '100%'}}
            transition={{type:'spring',stiffness:260,damping:25}}
            >
                {children}
            </motion.aside>
            
            </>

        )}
    </AnimatePresence>
    </>
  )
}

export default MobileDriver