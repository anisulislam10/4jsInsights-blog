import React from 'react'
import BlogCard from '../../BlogCard/BlogCard'
import { Link } from 'react-router-dom'

const EditBlog = () => {
  const RecentBlog=[
    {
        img: "../1.jpg",
        title: "Blog Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
    },
    {
        img: "../bl3.jpg",
        title: "Blog Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
    },
    {
        img: "../bl3.jpg",
        title: "Blog Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
    },
    {
      img: "../bl3.jpg",
      title: "Blog Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
  },
  {
      img: "../bl3.jpg",
      title: "Blog Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
  },
  {
      img: "../bl3.jpg",
      title: "Blog Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
  },
  {
    img: "../bl3.jpg",
    title: "Blog Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
},
{
    img: "../bl3.jpg",
    title: "Blog Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
},
{
    img: "../bl3.jpg",
    title: "Blog Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
},
{
  img: "../bl3.jpg",
  title: "Blog Title",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt, saepe odit perspiciatis fugiat explicabo voluptate impedit, adipisci provident fugit nulla corrupti distinctio blanditiis voluptatum cumque, ipsam dolorem. Fugit, eveniet.Placeat consequatur est, fuga eos, reiciendis saepe quod repellendus perspiciatis, beatae sint ipsa quis dolores amet ducimus odio? Sit quos maxime rem error, itaque tempora illum necessitatibus quaerat asperiores reprehenderit.Incidunt deserunt beatae tenetur cum animi ipsam nemo debitis nulla sit ipsum asperiores suscipit odio eius molestias, est exercitationem a ex itaque quis magnam laborum delectus quae, repellendus numquam. Quasi. Repellat rem facere minima laborum non pariatur officia! Mollitia consectetur amet dolor. Accusantium, numquam totam? Qui, unde error iusto ducimus hic earum quaerat voluptate laboriosam sit dolor sequi doloremque ex.Perspiciatis quibusdam amet necessitatibus facere numquam modi quos? Amet neque ut debitis reprehenderit quaerat id quod, fugit alias exercitationem quisquam asperiores, sequi fugiat facilis harum, aliquid assumenda adipisci velit eligendi."
},
{
  img: "../bl3.jpg",
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
    <div className='mb-4 py-4 mx-36'>
    {/* <BlogCard/> */}
          <h1 className='text-2xl font-semibold rounded mb-3 '>Edit Blogs</h1>
          <div className='grid grid-cols-2 gap-4'>
             {RecentBlog &&
              RecentBlog.map((items,i)=>(
                  <div key={i} className='bg-blue-400 rounded shadow-lg  pl-4 py-7'>
                    <img
                      src={items.img}
                      className='w-screen h-52  '
                      />
                     <h1 className='text-2xl font-semibold'> {items.title}</h1>
                      <p>{items.description.slice(0,50)}...</p>
                      {/* <BlogCard items={items}  /> */}
                      <div className='flex gap-1 '>
                      <Link to="/desc/1132e" className='bg-blue-600 hover:bg-blue-700 px-2 py-2 text-white rounded'>
                        
                        Read More</Link>
                      <Link to="/admin-dashboard/edit-blog/:id" className='bg-green-600 hover:bg-green-700 px-2 py-2 text-white rounded '>Edit</Link>

                      <button className='bg-red-600 hover:bg-red-700 px-2 py-2 text-white rounded'>Delete</button>

                      </div>
                  </div>
              ))
             }

          </div>

  </div>
  )
}

export default EditBlog