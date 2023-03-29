import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  date: string;
  tags: string[];
  slug: string;
  isPaginationPage: boolean;
};
const SinglePost = (props: Props) => {
  const { title, date, tags, slug, isPaginationPage } = props;
  return (
    <>
      {isPaginationPage ? (
        <section className='bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300'>
          <div className='lg:flex items-center'>
            <h2 className='text-gray-100 text-3xl font-medium mb-2'>
              <Link href={`/posts/${slug}`}>{title}</Link>
            </h2>
            <div className='text-gray-400 mr-2'>{date}</div>

            {tags?.map((tag: string, id: number) => (
              <Link href={`/posts/tag/${tag}/page/1`} key={id}>
                <span
                  className='text-white bg-gray-500 rounded-xl px-2 pb-1 font-medium mr-2'
                  key={id}>
                  {tag}
                </span>
              </Link>
            ))}
          </div>
          <p className='text-gray-100'>ここに説明を入れるべきか否か</p>
        </section>
      ) : (
        <section className='bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300'>
          <div className='flex items-center gap-3'>
            <h2 className='text-gray-100 text-3xl font-medium mb-2'>
              <Link href={`/posts/${slug}`}>{title}</Link>
            </h2>
            <div className='text-gray-100'>{date}</div>
            {tags?.map((tag: string, id: number) => (
              <Link href={`/posts/tag/${tag}/page/1`} key={id}>
                <span
                  className='text-white bg-gray-500 rounded-xl px-2 pb-1 font-medium'
                  key={id}>
                  {tag}
                </span>
              </Link>
            ))}
          </div>
          <p className='text-gray-100'>ここに説明を入れるべきか否か</p>
        </section>
      )}
    </>
  );
};

export default SinglePost;
