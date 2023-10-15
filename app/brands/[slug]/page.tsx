import path from "path";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";

export default function Brand({ params }: { params: any }) {
  const dataPath = path.join(
    process.cwd(),
    `_data/laptops/${params.slug}.json`
  );
  const data: any = JSON.parse(fs.readFileSync(dataPath).toString());

  const header = [
    "Name",
    "Price",
    "Model",
    "Screen Size",
    "Resolution",
    "RAM",
    "RAM Extendable Upto",
    "RAM Technology",
    "Processor",
    "Processor Generation",
    "Processor Speed",
    "Operating System",
    "OS Version",
    "Weight",
    "Country of Origin",
    "Shopping Link",
  ];

  return (
    <div>
      <div className="min-h-screen">
        <div className="py-12 px-6 md:px-16">
          <div className="text-4xl font-semibold capitalize">
            {params.slug} laptops
          </div>
          <div className="mt-12 text-sm md:text-base">
            <div className="flex overflow-hidden overflow-x-scroll">
              <div className="flex flex-col font-semibold w-2/3 md:w-1/4 flex-shrink-0 bg-opacity-95 backdrop-blur-xl md:sticky z-10 left-0 bg-white">
                <div className="px-8 py-2 aspect-square">Picture</div>
                {header.map((item: string, index: number) => (
                  <div className="px-8 py-2 border-t" key={index}>
                    {item}
                  </div>
                ))}
              </div>
              {data.map((item: any, index: number) => (
                <div
                  className="flex flex-col w-2/3 md:w-1/4 flex-shrink-0"
                  key={index}
                >
                  <div className="px-8 py-2 aspect-square relative border-l">
                    <div className="w-full aspect-square relative">
                      <Image
                        src={item.img}
                        fill
                        className="object-contain z-0"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="border-t px-8 py-2 border-l uppercase font-bold">
                    {item.title}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    ₹ {item.price}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.modelName}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.screenSize}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.resolution}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.ram}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.ramExtendable}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.ramType}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.processor}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.processorGen}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.processorSpeed}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.os}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.osVersion}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.weight}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    {item.features.countryOrigin}
                  </div>
                  <div className="border-t px-8 py-2 border-l">
                    <Link href={item.url.amazon} target="_blank">
                      <div className="text-blue-500 underline hover:no-underline">
                        Click here
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
