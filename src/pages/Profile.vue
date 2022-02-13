<template>
    <div class="flex flex-col">
        <div class="mt-16 mb-16">
            <div class="dark:border-black-700 relative mb-2 flex border-y py-2">
                <div class="absolute top-1.5 right-1">
                    <router-link to="/profile-edit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22 22"
                            width="22"
                            height="22"
                            fill="none"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="stroke-black-900 dark:stroke-white"
                        >
                            <path
                                d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
                            />
                            <path
                                d="M1 11.8801V10.1201C1 9.08006 1.85 8.22006 2.9 8.22006C4.71 8.22006 5.45 6.94006 4.54 5.37006C4.02 4.47006 4.33 3.30006 5.24 2.78006L6.97 1.79006C7.76 1.32006 8.78 1.60006 9.25 2.39006L9.36 2.58006C10.26 4.15006 11.74 4.15006 12.65 2.58006L12.76 2.39006C13.23 1.60006 14.25 1.32006 15.04 1.79006L16.77 2.78006C17.68 3.30006 17.99 4.47006 17.47 5.37006C16.56 6.94006 17.3 8.22006 19.11 8.22006C20.15 8.22006 21.01 9.07006 21.01 10.1201V11.8801C21.01 12.9201 20.16 13.7801 19.11 13.7801C17.3 13.7801 16.56 15.0601 17.47 16.6301C17.99 17.5401 17.68 18.7001 16.77 19.2201L15.04 20.2101C14.25 20.6801 13.23 20.4001 12.76 19.6101L12.65 19.4201C11.75 17.8501 10.27 17.8501 9.36 19.4201L9.25 19.6101C8.78 20.4001 7.76 20.6801 6.97 20.2101L5.24 19.2201C4.33 18.7001 4.02 17.5301 4.54 16.6301C5.45 15.0601 4.71 13.7801 2.9 13.7801C1.85 13.7801 1 12.9201 1 11.8801Z"
                            />
                        </svg>
                    </router-link>
                </div>
                <div
                    class="bg-black-700 dark:bg-black-800 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
                >
                    <!-- <img src="" alt="" class="h-full w-full object-cover" /> -->
                    <span class="w-full text-center text-sm text-white">ИИ</span>
                </div>
                <div class="ml-2 flex flex-col text-sm">
                    <div class="font-medium">Иван Иванович</div>
                    <div class="flex items-center">
                        <span class="mr-1 font-medium">Телефон:</span>
                        <span class="text-black-700 text-xs font-light">8987955810</span>
                    </div>
                    <div class="flex items-center">
                        <span class="mr-1 font-medium">Почта:</span>
                        <span class="text-black-700 text-xs font-light">ivanIvanovich1@gmai.com</span>
                    </div>
                    <div class="mb-4 flex items-center">
                        <span class="mr-1 font-medium">Адрес:</span>
                        <span class="text-black-700 text-xs font-light">город Нижний Новгород, ул.Родионова, 18А</span>
                    </div>
                    <div class="text-lg font-semibold">Ваш баланс: <span class="text-green-500">1523₽</span></div>
                </div>
            </div>
            <div class="dark:border-black-700 mb-2 flex flex-col border-b pb-2">
                <span class="mb-1 font-medium">Покупки</span>
                <ul class="flex flex-col">
                    <li class="dark:bg-black-800 mb-0.5 bg-[#F4F4F4] p-1">
                        <router-link to="/cart" class="flex items-center justify-between">
                            <span>Моя корзина</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6 12"
                                width="6"
                                height="12"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="stroke-black-900 dark:stroke-white"
                            >
                                <path d="M0.999999 11L5 6L0.999999 1" />
                            </svg>
                        </router-link>
                    </li>
                    <li class="dark:bg-black-800 mb-0.5 bg-[#F4F4F4] p-1">
                        <router-link to="/orders-history" class="flex items-center justify-between">
                            <span>История заказов</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6 12"
                                width="6"
                                height="12"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="stroke-black-900 dark:stroke-white"
                            >
                                <path d="M0.999999 11L5 6L0.999999 1" />
                            </svg>
                        </router-link>
                    </li>
                    <li class="dark:bg-black-800 mb-0.5 flex items-center justify-between bg-[#F4F4F4] p-1">
                        <span>Избранное</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 12"
                            width="6"
                            height="12"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="stroke-black-900 dark:stroke-white"
                        >
                            <path d="M0.999999 11L5 6L0.999999 1" />
                        </svg>
                    </li>
                    <li class="dark:bg-black-800 mb-0.5 flex items-center justify-between bg-[#F4F4F4] p-1">
                        <span>Купленные товары</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 12"
                            width="6"
                            height="12"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="stroke-black-900 dark:stroke-white"
                        >
                            <path d="M0.999999 11L5 6L0.999999 1" />
                        </svg>
                    </li>
                    <li class="dark:bg-black-800 mb-0.5 flex items-center justify-between bg-[#F4F4F4] p-1">
                        <span>Сравнение товаров</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 12"
                            width="6"
                            height="12"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="stroke-black-900 dark:stroke-white"
                        >
                            <path d="M0.999999 11L5 6L0.999999 1" />
                        </svg>
                    </li>
                </ul>
            </div>
            <div class="dark:border-black-700 mb-2 flex flex-col pb-2">
                <span class="mb-1 font-medium">Центр коммуникаций</span>
                <ul class="flex flex-col">
                    <li class="dark:bg-black-800 mb-0.5 flex items-center justify-between bg-[#F4F4F4] p-1">
                        <span>Уведомления</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 12"
                            width="6"
                            height="12"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="stroke-black-900 dark:stroke-white"
                        >
                            <path d="M0.999999 11L5 6L0.999999 1" />
                        </svg>
                    </li>
                    <li class="dark:bg-black-800 mb-0.5 flex items-center justify-between bg-[#F4F4F4] p-1">
                        <span>Настройка уведомлений</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 12"
                            width="6"
                            height="12"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="stroke-black-900 dark:stroke-white"
                        >
                            <path d="M0.999999 11L5 6L0.999999 1" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {}
    }
}
</script>
