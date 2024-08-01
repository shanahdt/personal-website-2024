interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Music and Corpus Studies',
    description: `How does one analyze large collections of musical data? This volume, co-edited with Ian Quinn and Ashley Burgoyne explores the history of computational musicology, as well as contemporary tools, techniques, and theories for this growing subdiscipline.`,
    imgSrc: '/static/images/longroom.png',
    href: 'https://academic.oup.com/edited-volume/41992,
  },
  {
    title: 'Networks of Musical Knowledge',
    description: `This project explores how musical ideas are transmitted through communication networks. With case studies including jazz collectives, 18th-century theoretical treatises, and others, it studies the nature of musical communication and interaction, through the lenses of network theory and the science of science.`,
  },
]

export default projectsData
