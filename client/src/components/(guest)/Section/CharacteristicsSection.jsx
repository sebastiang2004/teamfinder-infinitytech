export default function CharacteristicsSection() {

  const platformCharacteristics = [
    {
      id: 1,
      name: "Collaboration",
      icon: "",
    },
    {
      id: 2,
      name: "Innovation",
      icon: "",
    },
    {
      id: 3,
      name: "Productivity",
      icon: "",
    },

  ]

  return (
    <section id="characteristics" className="grid grid-cols-2 items-center px-28 h-[600px] bg-purple-50 dark:bg-primary-blue">
      <img src="https://i.ibb.co/7tLVtYk/Captura-de-ecran-din-2024-03-03-la-12-03-19-removebg-preview.png" alt=""/>
      <div>
        <p className="text-[35px] font-medium">Unlock the Power of <span
          className="text-primary-purple">Collaboration</span> with
          Our Platform</p>
        <p className="text-[14px] mt-6 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          aspernatur corporis eius error est id illo illum, laboriosam laudantium molestias mollitia nesciunt odit
          officiis perferendis quo repellendus tenetur veritatis voluptate.
        </p>
        <p className="text-[14px] mt-6 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          aspernatur corporis eius error est id illo illum, laboriosam laudantium molestias mollitia nesciunt odit
          officiis perferendis quo repellendus tenetur veritatis voluptate.
        </p>
        <div className="grid grid-cols-3 mt-16 gap-20">
          {platformCharacteristics.map(function (characteristic) {
            return (
              <div key={characteristic.id} className="flex items-center ">
                <img src="https://i.ibb.co/kqYykhC/Captura-de-ecran-din-2024-03-03-la-13-17-19-removebg-preview.png"
                     className="w-20 object-cover" alt=""/>
                <p>{characteristic.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
