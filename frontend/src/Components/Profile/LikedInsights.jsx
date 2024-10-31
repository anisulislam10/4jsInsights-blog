import React from 'react'
import BlogCard from '../BlogCard/BlogCard'

const LikedInsights = () => {
    const RecentBlog=[
        {
            img: "../1.jpg",
            title: "Blog Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
        },
        {
            img: "../3.jpg",
            title: "Blog Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
        },
        {
            img: "../bl3.jpg",
            title: "Blog Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
        },
        

    ]
  return (
    <div className=''>
            <h1 className='text-2xl font-semibold rounded mb-3 mx-[20px] '>Liked Insights</h1>
            <div className='flex flex-col gap-4'>
               {RecentBlog &&
                RecentBlog.map((items,i)=>(
                    <div key={i} className='flex flex-row gap-4 shadow-xl border-2 bg-blue-100 hover:bg-blue-200'>
                        <BlogCard items={items} />
                    </div>
                ))
               }

            </div>

    </div>
  )
}

export default LikedInsights