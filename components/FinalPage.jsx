import Image from "next/image";

export default function FinalPage() {
  return (
    <div className=" mx-auto flex justify-center text-center flex-col text-slate-200">
      <div className="mx-auto flex justify-center my-4 relative h-64 w-96">
        <Image
          src="/cse.jpeg"
          alt="MSC"
          // width="200"
          // height="200"
          layout="fill"
          className="rounded-md absolute"
          objectFit="cover"
        />
      </div>
      <a
        className="pointer-cursor"
        href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jUKrpFUNk9BM1FMWElVNlkxTkRFMkcyMk44WEJSUC4u"
      >
        <p className="name-style text-5xl mb-6">
          Frontend <br /> with <br /> Benefits
        </p>
      </a>
      <div className="text-xl">
        <p className="mb-4">Campus 15, School of Computer Science, KIIT</p>
        <p>Time: 10AM - 2 PM, 27th March 22</p>
        <p className="mt-4">Join in to know your results and prizes!!</p>
      </div>
      <div className="mx-auto flex justify-center my-4 relative h-64 w-96">
        <Image
          src="/moto.jpeg"
          alt="MSC"
          layout="fill"
          className="rounded-md absolute"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
