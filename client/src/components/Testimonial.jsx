import { TESTIMONIALS } from "../constants"
import { motion } from "framer-motion"

const childVarients = {
    hidden:{
        opacity:0,
        y:50
    },
    visible:(i) => ({
        opacity:1,
        y:0,
        transition:{
            duration:0.8,
            delay: i*0.8,
        }
    })
}
const Testimonial = () => {
  return (
    <section className="px-6 py-10" id="testimonials">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">What People Are Saying</h1>
        <div className="h-1 w-10 bg-white mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial,index) => (
                <motion.div
                    key={index}
                    className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
                    variants={childVarients}
                    initial="hidden"
                    whileInView="visible"
                    custom={index}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="flex items-center mb-4">
                        <img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full mr-4"
                            loading="lazy"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                            <p className="text-sm font-light">{testimonial.title}</p>
                        </div>
                    </div>
                    <p className="leading-relaxed">{testimonial.feedback}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Testimonial