import Image from "next/image";


const OurBrand = () => {
  return (
    <div data-aos="fade-up" id="ourBrand" className="bg-white mt-28 mb-20">
      <h1 className="md:text-6xl text-slate-700 text-5xl font-bold text-center grid grid-col-1 justify-center my-12 ">
        Our Brand
        <span className="w-full border-b-2 border-solid border-orange-600 inline-block mt-3"></span>
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-2   gap-8 mx-auto justify-center w-4/5 md:w-full">
        <div>
          {" "}
          <Image
            className="rounded-full border-4 border-orange-600"
            src={"/image/care.webp"}
            alt=" "
            width={400}
            height={300}
          />{" "}
        </div>
        <div>
          {" "}
          <Image
            className="rounded-full border-4 border-orange-600"
            src={"/image/it.webp"}
            alt=" "
            width={400}
            height={300}
          />{" "}
        </div>
        <div>
          {" "}
          <Image
            className="rounded-full border-4 border-orange-600"
            src={"/image/pro.webp"}
            alt=" "
            width={400}
            height={300}
          />{" "}
        </div>
        <div>
          {" "}
          <Image
            className="rounded-full border-4 border-orange-600"
            src={"/image/call.webp"}
            alt=" "
            width={400}
            height={300}
          />{" "}
        </div>
      </div>
      <div className="md:mt-28 mt-14">
        <Image
          className=" rounded-xl border border-orange-600 md:w-full w-11/12 mx-auto"
          src={"/image/about.jpeg"}
          alt=" "
          width={1400}
          height={800}
        />{" "}
      </div>
    </div>
  );
};

export default OurBrand;
