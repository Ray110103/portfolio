import React from 'react'

const Testimonials = () => {
  return (
    <section className="h-fit p-10 bg-white text-black ">
        <h2 className="text-3xl font-bold mb-12 text-center ">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <blockquote className="border-l-4 pl-4 italic">
            "John is a highly skilled developer and a great team player. His code is clean and efficient."
            <br />- Jane Smith, Project Manager
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Very reliable and professional. Delivered all tasks on time with great quality."
            <br />- Mike Johnson, Client
          </blockquote>

          
          <blockquote className="border-l-4 pl-4 italic">
            "Excellent communication and problem-solving skills. Highly recommend!"
            <br />- Sarah Lee, Product Owner
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Delivered outstanding UI/UX design under tight deadlines."
            <br />- Rachel Kim, UX Lead
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Great attention to detail and very responsive during collaboration."
            <br />- Daniel Wu, Developer
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Impressive creativity and consistency in both design and development."
            <br />- Lisa Chen, Art Director
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Always delivers high-quality code and creative solutions."
            <br />- Amanda Rivera, Team Lead
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Great collaborator and team player on every project."
            <br />- Kevin Tran, Project Manager
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Went above and beyond to ensure project success."
            <br />- Emily Zhang, Senior Developer
          </blockquote>
          
          <blockquote className="border-l-4 pl-4 italic">
            "Exceptional design taste and frontend knowledge."
            <br />- Omar Ahmed, Product Designer
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Quick learner and highly adaptable to challenges."
            <br />- Jason Cole, Software Architect
          </blockquote>
        </div>
      </section>
  )
}

export default Testimonials