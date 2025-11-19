import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div>
      <header class="bg-[#3b2f29] text-white shadow-md">
        <div class="max-w-1450 mx-auto px-4 py-2 text-sm border-b border-white border-opacity-10 hidden lg:flex justify-between items-center">
          <div class="flex space-x-4">
            <span class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2 text-[#fdd835]"></i> Ваш
              город: Константинополь
            </span>
            <span class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2 text-[#fdd835]"></i> Наш
              офис: Москва, ул. Новосхимская Д.7
            </span>
          </div>
          <nav class="flex space-x-6">
            <a href="#" class="hover:text-[#fdd835] transition">
              Статьи
            </a>
            <a href="#" class="hover:text-[#fdd835] transition">
              Оплата
            </a>
            <a href="#" class="hover:text-[#fdd835] transition">
              Гарантия
            </a>
            <a href="#" class="hover:text-[#fdd835] transition">
              Дилерам
            </a>
            <a href="#" class="hover:text-[#fdd835] transition">
              Вакансии
            </a>
          </nav>
        </div>

        <div class="bg-[#fff8f0] text-gray-800 py-4 px-4 lg:px-6">
          <div class="max-w-1450 mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            <div class="flex items-center lg:w-1/6">
              <div class="flex space-x-1.5 mr-4">
                <div class="w-8 h-8 bg-[#ff9800]"></div>
                <div class="w-8 h-8 bg-black"></div>
                <div class="w-8 h-8 bg-[#fdd835]"></div>
              </div>
              <span class="text-sm font-semibold hidden lg:block">
                Логотип вашего магазина
              </span>
            </div>

            <div class="flex-1 w-full lg:w-4/6">
              <div class="flex flex-wrap text-xs font-medium mb-3 gap-x-4 gap-y-1 justify-center lg:justify-start">
                <span class="flex items-center text-green-600">
                  <i class="fas fa-check text-[#fdd835] mr-1"></i> Лучшие цены
                </span>
                <span class="flex items-center text-green-600">
                  <i class="fas fa-check text-[#fdd835] mr-1"></i> Бесплатная
                  доставка
                </span>
                <span class="flex items-center text-green-600">
                  <i class="fas fa-check text-[#fdd835] mr-1"></i> Гарантия от
                  3х лет
                </span>
                <span class="flex items-center text-green-600">
                  <i class="fas fa-check text-[#fdd835] mr-1"></i> Более 1 000
                  товаров
                </span>
              </div>

              <div class="flex">
                <input
                  type="text"
                  placeholder="Поиск по каталогу..."
                  class="flex-1 p-3 text-base border-0 outline-none placeholder-gray-400 focus:ring-2 focus:ring-[#fdd835]"
                />
                <button class="bg-[#fdd835] text-[#3b2f29] font-bold p-3 px-6 hover:bg-yellow-400 transition whitespace-nowrap">
                  Найти
                </button>
              </div>
            </div>

            <div class="hidden lg:block lg:w-1/4 text-sm ml-6">
              <div class="flex flex-col items-end">
                <span class="text-gray-600 flex items-center mb-1">
                  <i class="far fa-clock mr-1"></i> Ежедневно с 9:00 до 21:00
                </span>
                <span class="text-gray-600 flex items-center mb-1">
                  <i class="fas fa-envelope mr-1"></i> youremail@mailbox.ru
                </span>
              </div>
            </div>

            <div class="hidden lg:flex flex-col items-end">
              <p class="text-xl font-bold text-[#3b2f29] leading-tight">
                8 (800) 800-00-00
              </p>
              <p class="text-lg font-bold text-[#3b2f29] leading-tight mb-2">
                8 (495) 700-00-00
              </p>
              <button class="bg-[#ff5722] text-white font-bold py-2 px-4 hover:bg-orange-600 transition shadow-lg whitespace-nowrap">
                Заказать ЗВОНОК
              </button>
            </div>
          </div>
        </div>

        <div class="bg-white text-gray-700 shadow-sm hidden lg:block">
          <div class="max-w-1450 mx-auto flex items-center">
            <div class="bg-[#fdd835] text-[#3b2f29] font-bold py-3 px-6 mr-8 whitespace-nowrap flex items-center">
              <i class="fas fa-grip-vertical mr-2"></i> Каталог товаров
            </div>

            <nav class="flex space-x-8 text-sm font-medium">
              <a
                href="#"
                class="py-3 text-[#ff5722] border-b-2 border-[#ff5722]"
              >
                О компании
              </a>
              <a href="#" class="py-3 hover:text-[#ff5722] transition">
                Отзывы
              </a>
              <a href="#" class="py-3 hover:text-[#ff5722] transition">
                Наши работы
              </a>
              <a href="#" class="py-3 hover:text-[#ff5722] transition">
                Доставка
              </a>
              <a href="#" class="py-3 hover:text-[#ff5722] transition">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
