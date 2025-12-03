export default function Footer() {
  return (
    <footer className="w-full bg-[#525255] text-white pt-12 font-helvetica"> 
      <div className="px-6 sm:px-8 md:px-10 lg:px-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">Work with us</h2>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=raffahitipeuw@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-xl sm:text-2xl md:text-3xl mt-1 md:mt-0 break-all"
          >
            raffahitipeuw@gmail.com
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

          <div>
            <h3 className="text-xl sm:text-2xl md:text-2xl">Site map</h3>
            <ul className="space-y-1 sm:space-y-2 mt-3 text-[#CFCFCF]">
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-2xl">Sosial</h3>
            <ul className="space-y-1 sm:space-y-2 mt-3 text-[#CFCFCF]">
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>

      <div className="mt-10 w-full bg-[#525255] flex justify-center md:justify-start text-[#D9D9D9] font-pixel leading-none px-6 sm:px-8 md:px-10 lg:px-20 pb-0">
        <span className="text-[7rem] sm:text-[9rem] md:text-[16rem] lg:text-[22rem]">
          2025
        </span>
      </div>

    </footer>
  );
}
