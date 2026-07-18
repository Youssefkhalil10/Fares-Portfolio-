import Project_1 from "../../assets/Project 1 .jpeg";
import Project_2 from "../../assets/Project 2 .jpeg";
import Project_3 from "../../assets/Project 3 .jpeg";
import Project_4 from "../../assets/Project 4 .jpeg";
import Project_5 from "../../assets/Project 5.jpeg";
import Project_6 from "../../assets/Project 6.jpeg";
import Molto from "../../assets/Molto Project.jpeg";
import PUBG from "../../assets/PUBG Project.jpeg";
import Project_9 from "../../assets/Project 9.jpeg";
import Project_10 from "../../assets/Project 10.jpeg";
const data = [
  { title: "Project 1", img: Project_1 },
  {
    title: "Project 2 ",
    img: Project_2,
  },
  {
    title: "Project 3",
    img: Project_3,
  },
  {
    title: "Project 4",
    img: Project_4,
  },
  {
    title: "Project 5",
    img: Project_5,
  },
  {
    title: "Project 6",
    img: Project_6,
  },

  {
    title: "Project 9",
    img: Project_9,
  },
  {
    title: "Project 10",
    img: Project_10,
  },
  {
    title: "Molto Project",
    img: Molto,
  },
  {
    title: "PUBG Project",
    img: PUBG,
  },
];

function SecondSection() {
  return (
    <section className="text-center py-12  text-white">
      <h4 className="text-3xl font-bold mb-8">My Projects</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((project) => (
          <div
            key={project.title}
            className="group relative transition-all cursor-pointer duration-300 hover:scale-105 hover:-translate-y-2 hover:z-10"
          >
            <div className="h-[350px] bg-zinc-900 rounded-lg flex items-center justify-center">
              <img
                src={project.img}
                alt={project.title}
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <p className="font-semibold">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SecondSection;
