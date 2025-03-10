import ArrayContent from '../../json/index.json';
import ShareIcon from '../../assets/svg/share-arrows.svg';
import DownloadIcon from '../../assets/svg/download-button.svg';
import classNames from 'classnames';

export default function Content() {
  function getRandomColspan() {
    const colSpan = [
      
      'md:col-span-3',
      'md:col-span-1',
      'md:col-span-2',
    ];
    return colSpan[Math.floor(Math.random() * colSpan.length)];
  }

  return (
    <div className="h-screen ">
      <div className="container mx-auto w-full pb-[15%] mt-10 p-[5%] md:mt-5 grid md:grid-cols-6 gap-5 md:gap-1  justify-center sm:grid-cols-3 grid-cols-2 overflow-auto grid-flow-dense">
        {ArrayContent.map((picture, index) => (
          <div
            key={index}
            className={classNames(
              `h-80 overflow-hidden rounded-lg group relative ${getRandomColspan()}`
            )}
          >
            <a href="#" className="">
              <img
                src={picture.source}
                className="w-full h-full object-cover hover:scale-125 transition duration-500 "
                alt={picture.name}
              />
              <div className="absolute hidden backdrop-blur-sm bg-slate-400/50 bottom-0 w-full justify-evenly sm:gap-1 b p-2 rounded-lg gap-2 lg:gap-5 group-hover:flex">
                <button className="font-bold p-2 border-2 rounded-xl bg-slate-400 text-[13px] sm:text-[11px] md:text-[0px]  md:px-4 text-black border-white cursor-pointer flex gap-1 lg:gap-2 items-center justify-center">
                  <img
                    src={DownloadIcon}
                    className="w-4 h-4 sm:w-3 sm:h-3 md:ml-1"
                    alt=""
                  />
                  <p>Download</p>
                </button>
                <button className="font-bold p-2 border-2 rounded-xl bg-slate-400 text-[13px] sm:text-[11px] md:text-[0px] md:px-4  text-black border-white cursor-pointer flex gap-1 lg:gap-2 items-center justify-center">
                  <img
                    src={ShareIcon}
                    className="w-4 h-4 sm:w-3 sm:h-3 md:ml-1"
                    alt=""
                  />
                  <p>Share</p>
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
