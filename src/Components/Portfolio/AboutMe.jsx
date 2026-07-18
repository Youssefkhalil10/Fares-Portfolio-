import Skills from "./Skills";

function AboutMe() {
  return (
    <section className="max-w-6xl mx-auto p-8 md:p-16 text-gray-900  rounded-xl space-y-12">
      {/* Summary */}
      <div className="p-6 rounded-lg  shadow-lg ">
        <h3 className="text-2xl font-bold mb-4 text-blue-500">Summary</h3>
        <p className=" text-white leading-relaxed">
          Graphic Designer with strong expertise in Adobe Photoshop and Adobe
          Illustrator. Skilled in creating visually appealing designs, branding
          materials, marketing content, and digital graphics with a focus on
          creativity, visual communication, and brand consistency. Passionate
          about transforming ideas into impactful designs while continuously
          learning new design trends and techniques.
        </p>
      </div>

      {/* Skills */}
      <Skills />
    </section>
  );
}

export default AboutMe;
