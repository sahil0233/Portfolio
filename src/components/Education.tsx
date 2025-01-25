import { FadeIn } from "./FadeIn"
import GlowCard from "./GlowCard"
import Image from 'next/image';

const educations = [{
        'degree' : 'B.Tech in Computer Science and Technology',
        'logo_path': '/tec.png',
        'school' : 'Jaipur Engineering College and Research Centre',
        'grade' : 'GPA: 7.84'
    },
    {
        'degree' : '12th CBSE',
        'logo_path': '/nms.jpg',
        'school' : 'Neerja Modi School',
        'grade' : 'Percentage: 89.2 %'
    },
    {
        'degree' : '10th CBSE',
        'logo_path': '/nms.jpg',
        'school' : 'Neerja Modi School',
        'grade' : 'CGPA: 10'
    }]
export default function Education() {
return (
    <div className='@container'>
    <div className='flex gap-5 mt-16 flex-col justify-start'>
    {educations.map((educations,index) => (
        <FadeIn
        key={index}
        id='index'
        variants={{
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        }}
        className="self-start w-3/4"
    >
        <GlowCard className="hover:shadow-education_blue/90" glowClassName="from-[#495df5] to-[#495df5]">
        <div className="flex flex-col gap-8 @lg:flex-row justify-between">
            <div className="flex-none mx-auto self-center">
            <Image className="rounded-2xl object-fill" src={educations.logo_path} alt="" width={144} height={144} />
            </div>
            <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">{educations.degree}</h3>
            <p className="text-base leading-7 text-education_blue">{educations.school}</p>
            <p className="text-base leading-7 text-education_blue">{educations.grade}</p>
            </div>
        </div>
        </GlowCard>
        </FadeIn>
    ))}
    </div>
    </div>
)
}
