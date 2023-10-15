import Image from "next/image";
import Link from "next/link";

export default function Brands() {
  const brands = [
    [
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg",
      "Lenovo",
      "/lenovo",
    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg",
      "Acer",
      "/acer",
    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/ASUS_Logo-neu.svg",
      "Asus",
      "/asus",
    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
      "Dell",
      "/dell",
    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      "Apple",
      "/apple",
    ],
  ];

  return (
    <div className="min-h-screen px-6 md:px-16 py-12">
      <div className="text-4xl max-w-fit border-b-4 font-semibold pb-2 border-slate-300">
        Popular brands
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 gap-y-16">
        {brands.map(([img, title, uri], index) => (
          <Link href={`/brands${uri}`} key={index}>
            <div className="flex flex-col border group rounded-xl">
              <div className="p-6">
                <div className="w-full aspect-square relative">
                  <Image
                    src={img}
                    fill
                    className={
                      index === 4 ? "object-contain scale-50" : "object-contain"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="text-xl border-t p-6 group-hover:bg-slate-100 text-center group-hover:underline font-semibold">
                {title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
