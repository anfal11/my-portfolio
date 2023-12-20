
const Skills = () => {
    return (
        <div className="max-w-[1520px] mx-auto pt-48">
            <h1 className="text-center font-bold text-4xl underline mb-10"> Skills </h1>

            {/* <div>
                
                <div className="flex justify-center items-center gap-5">
                <h1 className="text-center font-semibold text-2xl underline mb-10 mr-10"> Front-End: </h1>
                    <SkillItem iconUrl="https://img.icons8.com/color/96/000000/html-5--v1.png" skillName="HTML5" />
                    <SkillItem iconUrl="https://img.icons8.com/color/96/000000/css3.png" skillName="CSS3" />
                    <SkillItem iconUrl="https://img.icons8.com/color/96/000000/javascript--v1.png" skillName="JavaScript" />
                    <SkillItem iconUrl="https://img.icons8.com/color/96/000000/react-native.png" skillName="React" />
                </div>
            </div>

            <div className="mt-10">
                
                <div className="flex justify-center items-center gap-5">
                <h1 className="text-center font-semibold text-2xl underline mb-10 mr-10"> Back-End: </h1>
                    <SkillItem iconUrl='https://img.icons8.com/color/96/000000/nodejs--v1.png' skillName="Node.js" />
                    <SkillItem iconUrl='https://img.icons8.com/color/96/000000/express-js--v1.png' skillName="Express.js" />
                    <SkillItem iconUrl='https://img.icons8.com/color/96/000000/mongodb--v1.png'skillName="MongoDB" />
                </div>
            </div> */}

            <div>
                <div className="flex flex-wrap justify-center items-center gap-5">

                <figure className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="" />
                <figcaption className="text-lg font-semibold">HTML</figcaption>
                </figure>

                <figure className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/css3.png" alt="" />
                <figcaption className="text-lg font-semibold">CSS</figcaption>
                </figure>

                <figure className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/tailwindcss--v1.png" alt="" />
                <figcaption className="text-lg font-semibold">Tailwind CSS</figcaption>
                </figure>
                
                <figure className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/bootstrap--v1.png" alt="" />
                <figcaption className="text-lg font-semibold">Bootstrap</figcaption>
                </figure>

                <figure className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="" />
                <figcaption className="text-lg font-semibold">javaScript</figcaption>
                </figure>

                <figure className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="" />
                <figcaption className="text-lg font-semibold">ReactJs</figcaption>
                </figure>
                
                <figure className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/nodejs--v1.png" alt="" />
                <figcaption className="text-lg font-semibold">Nodejs</figcaption>
                </figure>

                <figure className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/express-js--v1.png" alt="" />
                <figcaption className="text-lg font-semibold">Expressjs</figcaption>
                </figure>

                <figure className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/mongodb--v1.png" alt="" />
                <figcaption className="text-lg font-semibold">MongoDB</figcaption>
                </figure>

         
        
                </div>
            </div>

        </div>
    );
};

// const SkillItem = ({ iconUrl, skillName }) => (
//     <div className="flex flex-col justify-center items-center">
//         <img src={iconUrl} alt={skillName} />
//         <p className="text-center font-semibold text-lg">{skillName}</p>
//     </div>
// );

export default Skills;
