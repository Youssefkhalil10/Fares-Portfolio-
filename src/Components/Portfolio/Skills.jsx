import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaPalette,
  FaPenNib,
  FaPaintBrush,
  FaInstagram,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiVite,
  SiFirebase,
  SiSupabase,
  SiReactquery,
  SiAxios,
  SiTestinglibrary,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiFigma,
  SiCanva,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { SiFormspree } from "react-icons/si";
function Skills() {
  return (
    <div className="p-2 sm:p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-blue-500">Skills</h3>

      <ul className="text-white leading-relaxed text-sm sm:text-base space-y-3">
        {/* <li className="flex items-center gap-2">
          <SiAdobephotoshop className="text-blue-500" />
          <strong>Adobe Photoshop:</strong> Photo Manipulation, Retouching,
          Compositing
        </li>

        <li className="flex items-center gap-2">
          <SiAdobeillustrator className="text-orange-500" />
          <strong>Adobe Illustrator:</strong> Vector Design, Logo Design, Icons
        </li> */}

        <li className="flex items-center gap-2">
          <SiAdobeindesign className="text-pink-500" />
          <strong>Adobe InDesign:</strong> Magazine & Print Layouts
        </li>

        <li className="flex items-center gap-2">
          <SiFigma className="text-purple-500" />
          <strong>Figma:</strong> UI Design, Wireframes, Prototyping
        </li>

        <li className="flex items-center gap-2">
          <SiCanva className="text-cyan-500" />
          <strong>Canva:</strong> Social Media & Marketing Designs
        </li>

        <li className="flex items-center gap-2">
          <FaPalette className="text-pink-400" />
          <strong>Brand Identity:</strong> Logo, Color Palette, Brand Guidelines
        </li>

        <li className="flex items-center gap-2">
          <FaPenNib className="text-yellow-500" />
          <strong>Typography:</strong> Font Pairing & Visual Hierarchy
        </li>

        <li className="flex items-center gap-2">
          <FaPaintBrush className="text-green-500" />
          <strong>Print Design:</strong> Business Cards, Flyers, Brochures
        </li>

        <li className="flex items-center gap-2">
          <FaInstagram className="text-pink-500" />
          <strong>Social Media Design:</strong> Posts, Stories, Ads, Banners
        </li>

        <li className="flex items-center gap-2">
          <FaLightbulb className="text-yellow-400" />
          <strong>Creative Skills:</strong> Layout, Composition, Color Theory
        </li>
      </ul>
    </div>
  );
}

export default Skills;
