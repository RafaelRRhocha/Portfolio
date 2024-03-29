import type { FC } from 'react';

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <picture>
      <img
        src="https://user-images.githubusercontent.com/99758843/185761535-b0fe5cf6-49e2-44f8-bd35-64100d247654.gif"
        alt="loading"
        className='h-[200px] w-[200px] m-auto'
      />
    </picture>
  );
}

export default Loading;