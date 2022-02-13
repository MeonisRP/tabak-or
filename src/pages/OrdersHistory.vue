<template>
    <div class="relative flex flex-col">
        <div class="dark:bg-black-900 sticky top-16 flex w-full flex-col border-b bg-white py-2">
            <div class="relative mb-2 flex">
                <div class="text-xl font-semibold">История заказов</div>
            </div>
            <div class="grid grid-cols-2 items-center gap-2">
                <button class="bg-black-800 flex items-center justify-center rounded-lg py-1">
                    <span class="text-white">Сортировать</span>
                    <svg
                        class="ml-2 h-3 w-3"
                        width="9"
                        height="12"
                        viewBox="0 0 9 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4.5 0L8.39711 4.5H0.602886L4.5 0Z" fill="white" />
                        <path d="M4.5 12L0.602886 7.5L8.39711 7.5L4.5 12Z" fill="white" />
                    </svg>
                </button>
                <div class="flex text-lg font-semibold">
                    Ваш баланс: <span class="ml-1 text-green-500">1523 ₽</span>
                </div>
            </div>
        </div>
        <div class="mt-16 mb-16">
            <div v-for="order in orders" :key="order.id" class="px-2 font-light">
                <div class="border-black-600 flex justify-between border-b py-2 text-sm">
                    <div class="mr-2 flex w-7/12 flex-col">
                        <div class="mb-2">
                            <span class="rounded bg-orange-500 px-2 py-1.5 text-xs text-white">
                                {{ order.status }}
                            </span>
                        </div>
                        <div class="mb-4 flex items-center">
                            <span class="mr-2 font-semibold">Заказ № {{ order.id }}</span>
                            <span class="text-xs">{{ order.date }}</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-black-700 mr-1.5">Всего товаров:</span>
                            <span>{{ order.amount }} шт</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-black-700 mr-1.5">Общая сумма:</span>
                            <span>{{ order.sum }}₽</span>
                        </div>
                    </div>
                    <div class="flex w-2/12 flex-col items-end">
                        <div class="mb-auto flex flex-col">
                            <div class="mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    width="20"
                                    height="20"
                                    stroke-width="1"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    class="stroke-black-900 dark:stroke-white"
                                >
                                    <path
                                        d="M15.1633 0.0550026C14.825 0.129026 14.4753 0.289328 14.1675 0.511398C14.0269 0.612889 11.3087 3.29971 8.12722 6.48214L2.34268 12.2684L1.17123 15.8159C0.526987 17.767 -8.34203e-05 19.4176 9.90328e-09 19.4837C0.000292015 19.7263 0.279992 20 0.527571 20C0.569995 20 2.20994 19.4654 4.17184 18.812L7.73902 17.6239L13.6257 11.7368C20.0391 5.32294 19.6866 5.70151 19.9038 4.99521C19.9794 4.74942 20 4.58462 20 4.22413C20 3.86364 19.9794 3.69883 19.9038 3.45305C19.7139 2.83543 19.6027 2.68905 18.4432 1.53039C17.4152 0.503187 17.3604 0.455547 17.0142 0.289286C16.8163 0.194214 16.5253 0.0890969 16.3677 0.0557529C16.0179 -0.0183125 15.4997 -0.0186042 15.1633 0.0550026ZM16.3627 1.20208C16.6885 1.32387 16.8671 1.47566 17.8159 2.43726C18.7065 3.33989 18.8285 3.51482 18.8878 3.97517C18.969 4.60516 18.7921 5.04235 18.2309 5.59907L17.8532 5.97364L15.9325 4.05691L14.0118 2.14013L14.388 1.77801C14.5949 1.57882 14.8451 1.36851 14.9439 1.31065C15.3613 1.0662 15.8909 1.02569 16.3627 1.20208ZM15.153 4.85987L17.0612 6.76686L12.2641 11.5598L7.46692 16.3528L5.54794 14.4357L3.62896 12.5187L8.41572 7.73579C11.0484 5.1052 13.212 2.95289 13.2236 2.95289C13.2352 2.95289 14.1034 3.81104 15.153 4.85987ZM4.77154 15.2438L6.43505 16.9063L3.97474 17.7238C2.62154 18.1734 1.49423 18.5412 1.46962 18.5412C1.44497 18.5412 1.78933 17.4487 2.23476 16.1133C3.1142 13.4772 3.07878 13.5813 3.09605 13.5813C3.10264 13.5813 3.8566 14.3294 4.77154 15.2438Z"
                                    />
                                </svg>
                            </div>
                            <div class="mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 18"
                                    width="16"
                                    height="18"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="stroke-black-900 dark:stroke-white"
                                >
                                    <path
                                        d="M5.59157 3.23333C6.31657 3.01667 7.11657 2.875 7.9999 2.875C11.9916 2.875 15.2249 6.10833 15.2249 10.1C15.2249 14.0917 11.9916 17.325 7.9999 17.325C4.00824 17.325 0.774902 14.0917 0.774902 10.1C0.774902 8.61667 1.2249 7.23333 1.99157 6.08333"
                                    />
                                    <path d="M4.55835 3.43332L6.96668 0.666656" />
                                    <path d="M4.55835 3.43335L7.36668 5.48335" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-2">
                <div class="mb-1 text-xl font-semibold">Итог:</div>
                <div class="flex items-center">
                    <span class="text-black-700 mr-1.5">Товара заказано:</span>
                    <span>420 шт</span>
                </div>
                <div class="flex items-center">
                    <span class="text-black-700 mr-1.5">Общая сумма:</span>
                    <span>150000₽</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrdersHistory',
    data() {
        return {
            orders: [
                {
                    id: 'ABC123',
                    date: '12.06.2021',
                    status: 'Оформлен',
                    amount: 140,
                    sum: 150000
                },
                {
                    id: 'ABC124',
                    date: '12.06.2021',
                    status: 'Оформлен',
                    amount: 140,
                    sum: 150000
                },
                {
                    id: 'ABC125',
                    date: '12.06.2021',
                    status: 'Оформлен',
                    amount: 140,
                    sum: 150000
                },
                {
                    id: 'ABC126',
                    date: '12.06.2021',
                    status: 'Оформлен',
                    amount: 140,
                    sum: 150000
                },
                {
                    id: 'ABC127',
                    date: '12.06.2021',
                    status: 'Оформлен',
                    amount: 140,
                    sum: 150000
                }
            ]
        }
    }
}
</script>
