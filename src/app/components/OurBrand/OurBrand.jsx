import Image from "next/image";

const OurBrand = () => {
    return (
      <div className="bg-white my-28">
        <h1 className="text-6xl font-bold text-center grid grid-col-1 justify-center my-12 ">
          Our Brand
        <span className="w-full border-b-2 border-solid border-orange-600 inline-block mt-3"></span>
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mx-auto justify-center w-4/5 md:w-full">
          <div>
            {" "}
            <Image
              className="rounded-full border-4 border-orange-600"
              src={"https://thebandf.com/assets/img/care.png"}
              alt=" "
              width={400}
              height={300}
            />{" "}
          </div>
          <div>
            {" "}
            <Image
              className="rounded-full border-4 border-orange-600"
              src={"https://thebandf.com/assets/img/it.png"}
              alt=" "
              width={400}
              height={300}
            />{" "}
          </div>
          <div>
            {" "}
            <Image
              className="rounded-full border-4 border-orange-600"
              src={"https://thebandf.com/assets/img/pro.png"}
              alt=" "
              width={400}
              height={300}
            />{" "}
          </div>
          <div>
            {" "}
            <Image
              className="rounded-full border-4 border-orange-600"
              src={"https://thebandf.com/assets/img/call.png"}
              alt=" "
              width={400}
              height={300}
            />{" "}
          </div>
        </div>
      </div>
    );
};

export default OurBrand;