import React from "react";
import Banner from "../assets/img/Banner.png";
const Hero = () => {
  return (
    <div>
      <div className="max-w-1450 mx-auto px-4 py-2">
        <div className="flex flex-col gap-[40px]">
          <div className="img">
            <img src={Banner} alt="" />
          </div>
          <div className="flex items-center gap-0.5">
            <div className="flex items-center gap-[10px]">
              <i class="fas fa-pen"></i>
              <p className="font-normal text-[14px] leading-[1.26] tracking-[-0.015em] align-middle">
                Изготовливаем конструкции по вашему дизайн-проекту
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <i class="fas fa-person-digging text-3xl text-[#513E33]"></i>
              <p className="font-normal text-[14px] leading-[1.26] tracking-[-0.015em] align-middle">
                Изготовили более 2 400 деревянных конструкций
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <i class="fas fa-sync-alt text-3xl text-[#513E33]"></i>
              <p className="font-normal text-[14px] leading-[1.26] tracking-[-0.015em] align-middle">
                Собственное производство площадью 6 000 м2
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <i class="fas fa-shield-alt text-3xl text-[#513E33]"></i>
              <p className="font-normal text-[14px] leading-[1.26] tracking-[-0.015em] align-middle">
                Производим изделия из дерева с 1998 года
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <i class="fas fa-thumbs-up"></i>
              <p className="font-normal text-[14px] leading-[1.26] tracking-[-0.015em] align-middle">
                Гарантия от 3х лет на все конструкции
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
