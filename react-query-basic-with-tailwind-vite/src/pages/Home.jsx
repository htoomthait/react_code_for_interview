import React from 'react'


const Home = (props) => {

    props.setPageTitle("Home Page")

  return (
    <div className="">
       
        <h2 className="text-xl"> A Ramdom Cat Fact</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eaque quam minus dolorem, consequuntur quidem rerum consequatur accusamus at, dignissimos quas harum dolorum sed! Ullam porro culpa sit harum molestias.
        </p>
    </div>
    
  )
}

export default Home