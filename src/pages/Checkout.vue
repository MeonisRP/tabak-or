<template>
    <div class="flex flex-col">
        <div class="mt-16 mb-16">
            <div class="dark:border-black-700 mb-3 flex border-y py-3">
                <div
                    class="bg-black-700 dark:bg-black-800 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full"
                >
                    <!-- <img src="" alt="" class="h-full w-full object-cover" /> -->
                    <span class="w-full text-center text-xl text-white">ИИ</span>
                </div>
                <div class="ml-2 flex flex-col text-sm">
                    <div class="font-semibold">Иван Иванович</div>
                    <div>Ваш текущий баланс: <span class="font-semibold text-green-500">1523 ₽</span></div>
                    <div>Ваш баланс после оформления: <span class="font-semibold text-red-500">-2569 ₽</span></div>
                </div>
            </div>
            <div class="dark:border-black-700 flex flex-col border-b">
                <h2 class="mb-2 text-lg font-medium">Способ доставки <span class="text-red-500">*</span></h2>
                <div class="mb-2 flex text-sm text-white">
                    <button
                        class="bg-black-300 dark:bg-black-900 dark:border-black-700 dark:text-black-700 mr-1 w-full rounded border border-white px-1 py-1"
                    >
                        Деловые линии
                    </button>
                    <button
                        class="bg-black-300 dark:bg-black-900 dark:border-black-700 dark:text-black-700 mr-1 rounded border border-white px-1 py-1"
                    >
                        Сдэк
                    </button>
                    <button
                        class="bg-black-300 dark:bg-black-900 dark:border-black-700 dark:text-black-700 mr-1 rounded border border-white px-1 py-1"
                    >
                        Самовывоз
                    </button>
                    <button
                        class="dark:bg-blueish text-black-900 border-black-900 rounded border px-1 py-1 dark:text-white"
                    >
                        Курьером
                    </button>
                </div>
                <div class="flex">
                    <div class="mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 20"
                            width="16"
                            height="20"
                            fill="none"
                            stroke="#292D32"
                            stroke-width="1.5 "
                            class="stroke-black-900 dark:stroke-white"
                        >
                            <path
                                d="M7.9999 11.1916C9.43584 11.1916 10.5999 10.0276 10.5999 8.59164C10.5999 7.1557 9.43584 5.99164 7.9999 5.99164C6.56396 5.99164 5.3999 7.1557 5.3999 8.59164C5.3999 10.0276 6.56396 11.1916 7.9999 11.1916Z"
                            />
                            <path
                                d="M1.01675 7.07502C2.65842 -0.141644 13.3501 -0.133311 14.9834 7.08336C15.9417 11.3167 13.3084 14.9 11.0001 17.1167C9.32508 18.7334 6.67508 18.7334 4.99175 17.1167C2.69175 14.9 0.0584164 11.3084 1.01675 7.07502Z"
                            />
                        </svg>
                    </div>
                    <div>
                        <span class="font-medium">Адрес доставки</span>
                        <div class="text-xs">обл.Нижнегородская, г.Нижний-Новгород, ул.Родионова, 18</div>
                    </div>
                </div>
                <div class="flex w-full flex-col items-center pt-4 pb-2">
                    <button class="dark:bg-blueish bg-black-900 h-8 w-full rounded px-3 text-sm font-light text-white">
                        Изменить адрес
                    </button>
                </div>
            </div>
            <div class="dark:border-black-700 flex flex-col border-b">
                <h2 class="mb-2 mt-1 text-lg font-medium">Способ оплаты <span class="text-red-500">*</span></h2>
                <div class="mb-2 flex text-sm text-white">
                    <button
                        class="bg-black-300 dark:bg-black-900 dark:border-black-700 dark:text-black-700 mr-1 rounded border border-white px-4 py-1"
                    >
                        Наличными
                    </button>
                    <button
                        class="dark:bg-blueish text-black-900 border-black-900 rounded border px-4 py-1 dark:text-white"
                    >
                        Переводом
                    </button>
                </div>
            </div>
            <div class="dark:border-black-700 flex flex-col border-b">
                <h2 class="my-1 text-lg font-medium">Комментарий к заказу <span class="text-red-500">*</span></h2>
                <textarea
                    rows="6"
                    placeholder="Прошу позвонить , после отгрузки товара"
                    class="border-black-300 dark:bg-black-800 dark:border-black-900 rounded-lg bg-gray-50 text-sm"
                ></textarea>
                <h2 class="my-1 text-lg font-medium">Выбрать дату оформления <span class="text-red-500">*</span></h2>
                <p class="text-black-500 pb-2 text-xs">
                    (Выбирая дату, вы откладываете оформление на то число, которое указали)
                </p>
                <div class="mb-2 flex h-8">
                    <input
                        type="text"
                        placeholder="22.10.2021"
                        class="text-black-300 dark:bg-black-800 mr-1 w-1/3 rounded text-center text-sm"
                    />
                    <button class="dark:bg-blueish bg-black-900 h-8 w-1/3 rounded px-3 text-sm font-light text-white">
                        Применить
                    </button>
                </div>
            </div>
            <div class="flex w-full flex-col items-center py-6">
                <button class="dark:bg-blueish bg-black-900 h-8 w-3/4 rounded px-3 text-sm font-light text-white">
                    Оформить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Checkout',
    data() {
        return {}
    }
}
</script>
