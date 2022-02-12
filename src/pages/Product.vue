<template>
    <div class="flex flex-col">
        <div class="mt-16">
            <div class="relative flex flex-col">
                <div class="absolute top-0 left-0 w-full">
                    <div class="flex justify-between p-2">
                        <span class="bg-black-200 text-black-800 h-6 px-2 py-1 leading-4">
                            {{ product.status === 'Доступно' ? 'В наличии' : 'Нет в наличии' }}
                        </span>
                        <div class="mb-auto flex flex-col">
                            <div class="mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 19"
                                    width="20"
                                    height="19"
                                    fill="none"
                                    stroke-width="1.5"
                                    class="stroke-black-900 dark:stroke-white"
                                >
                                    <path
                                        d="M18.5408 1.86645C17.5543 0.662838 16.1859 0 14.6875 0C12.5802 0 11.246 1.3534 10.4979 2.48879C10.3038 2.78341 10.1386 3.07883 10 3.35682C9.86137 3.07883 9.69629 2.78341 9.50215 2.48879C8.75402 1.3534 7.41984 0 5.3125 0C3.81414 0 2.44566 0.66288 1.45918 1.86649C0.518242 3.01465 0 4.55237 0 6.19636C0 7.98589 0.649727 9.65034 2.04473 11.4344C3.29148 13.0289 5.08512 14.6724 7.16211 16.5756C7.93605 17.2849 8.73641 18.0183 9.58848 18.8199L9.61406 18.844C9.72453 18.948 9.86227 19 10 19C10.1377 19 10.2755 18.948 10.3859 18.844L10.4115 18.8199C11.2636 18.0183 12.0639 17.2849 12.838 16.5756C14.9149 14.6725 16.7085 13.0289 17.9553 11.4344C19.3503 9.65029 20 7.98589 20 6.19636C20 4.55237 19.4818 3.01465 18.5408 1.86645ZM12.0779 15.6165C11.4107 16.2278 10.724 16.857 10 17.5339C9.27602 16.8571 8.58934 16.2279 7.92203 15.6164C3.85723 11.8917 1.17188 9.43103 1.17188 6.19636C1.17188 4.85934 1.58613 3.61751 2.33836 2.69966C3.09922 1.77139 4.15543 1.26015 5.3125 1.26015C6.9191 1.26015 7.95766 2.32447 8.54594 3.21732C9.07363 4.01811 9.34898 4.82536 9.44289 5.13523C9.52145 5.39461 9.74633 5.57015 10 5.57015C10.2537 5.57015 10.4786 5.39461 10.5571 5.13523C10.651 4.82536 10.9264 4.01811 11.4541 3.21728C12.0423 2.32447 13.0809 1.26015 14.6875 1.26015C15.8446 1.26015 16.9008 1.77139 17.6616 2.69966C18.4139 3.61751 18.8281 4.85934 18.8281 6.19636C18.8281 9.43103 16.1428 11.8917 12.0779 15.6165Z"
                                    />
                                </svg>
                            </div>
                            <div class="mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="stroke-black-900 dark:stroke-white"
                                >
                                    <path d="M1 21H19" />
                                    <path
                                        d="M3.59998 7.38H2C1.45 7.38 1 7.83 1 8.38V17C1 17.55 1.45 18 2 18H3.59998C4.14998 18 4.59998 17.55 4.59998 17V8.38C4.59998 7.83 4.14998 7.38 3.59998 7.38Z"
                                    />
                                    <path
                                        d="M10.8002 4.19H9.2002C8.6502 4.19 8.2002 4.64 8.2002 5.19V17C8.2002 17.55 8.6502 18 9.2002 18H10.8002C11.3502 18 11.8002 17.55 11.8002 17V5.19C11.8002 4.64 11.3502 4.19 10.8002 4.19Z"
                                    />
                                    <path
                                        d="M17.9999 1H16.3999C15.8499 1 15.3999 1.45 15.3999 2V17C15.3999 17.55 15.8499 18 16.3999 18H17.9999C18.5499 18 18.9999 17.55 18.9999 17V2C18.9999 1.45 18.5499 1 17.9999 1Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dark:bg-black-800 bg-black-300 mb-2 h-40 rounded-lg">
                    <img :src="product.image" alt="" class="h-full w-full object-contain" />
                </div>
                <div class="flex justify-between">
                    <div class="dark:bg-black-800 bg-black-300 mr-2 w-1/3 rounded-lg p-2">
                        <img src="../products/1.png" alt="" class="h-full w-full object-contain" />
                    </div>
                    <div class="dark:bg-black-800 bg-black-300 mr-2 w-1/3 rounded-lg p-2">
                        <img src="../products/1.png" alt="" class="h-full w-full object-contain" />
                    </div>
                    <div class="dark:bg-black-800 bg-black-300 mr-2 w-1/3 rounded-lg p-2 last:mr-0">
                        <img src="../products/1.png" alt="" class="h-full w-full object-contain" />
                    </div>
                </div>
            </div>
            <h1 class="text-lg font-semibold">{{ product.name }}</h1>
            <div class="flex justify-between">
                <div class="flex items-center">
                    <span class="mr-1">4.5</span>
                    <div class="flex">
                        <svg
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            class="fill-black-900 h-3 dark:fill-white"
                        >
                            <path
                                d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            />
                        </svg>
                        <svg
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            class="fill-black-900 h-3 dark:fill-white"
                        >
                            <path
                                d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            />
                        </svg>
                        <svg
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            class="fill-black-900 h-3 dark:fill-white"
                        >
                            <path
                                d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            />
                        </svg>
                        <svg
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            class="fill-black-900 h-3 dark:fill-white"
                        >
                            <path
                                d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            />
                        </svg>
                        <svg
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="fill-black-900 dark:fill-white"
                        >
                            <path
                                d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_27_32"
                                    x1="6.5"
                                    y1="5"
                                    x2="5"
                                    y2="5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0.330729" stop-color="#B7B7B7" />
                                    <stop offset="0.354167" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div>{{ product.price }} ₽</div>
            </div>
            <div class="flex flex-col py-2">
                <div class="flex">
                    <h2
                        @click="tabToggle = !tabToggle"
                        class="my-1 mx-2 py-1"
                        :class="{ 'dark:border-blueish border-black-900 border-b': tabToggle }"
                    >
                        Характеристики
                    </h2>
                    <h2
                        @click="tabToggle = !tabToggle"
                        class="my-1 mx-2 py-1"
                        :class="{ 'dark:border-blueish border-black-900 border-b': !tabToggle }"
                    >
                        Описание
                    </h2>
                </div>
                <ul v-if="tabToggle" class="flex list-disc flex-col">
                    <li
                        v-for="param in product.params"
                        :key="param.name"
                        class="dark:odd:bg-black-800 odd:bg-black-100 flex justify-between pl-4"
                    >
                        <span>{{ param.name }}</span>
                        <span>{{ param.value }}</span>
                    </li>
                </ul>
                <div v-else>
                    <p>{{ product.description }}</p>
                </div>
            </div>
            <div class="dark:bg-black-900 fixed bottom-16 flex w-[calc(100%-1rem)] flex-col bg-white">
                <div class="mb-1 flex h-8 items-center justify-between">
                    <button
                        class="dark:text-black-700 dark:bg-black-900 dark:border-black-700 bg-black-300 border-black-300 mr-1 w-full rounded border px-2 py-1 text-xs text-white"
                    >
                        Блок
                    </button>
                    <button class="border-black-700 dark:bg-blueish mr-1 w-full rounded border px-2 py-1 text-xs">
                        Коробка
                    </button>
                    <button
                        @click="product.boxes--"
                        class="dark:bg-black-700 bg-black-900 rounded px-3 py-1 text-xs text-white"
                    >
                        -
                    </button>
                    <span class="mx-2">{{ product.boxes }}</span>
                    <button
                        @click="product.boxes++"
                        class="dark:bg-black-700 bg-black-900 rounded px-3 py-1 text-xs text-white"
                    >
                        +
                    </button>
                </div>
                <button class="border-black-700 dark:bg-blueish bg-black-900 mb-3 rounded border py-1 text-white">
                    Добавить в корзину
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    data() {
        return {
            product: {
                id: 1,
                name: 'Жевательный табак Oden’s 10г',
                status: 'Доступно',
                image: require('../products/1.png'),
                price: 400,
                boxes: 0,
                description:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto, laborum aspernatur natus sint, aliquid iure aliquam dolores neque quos repudiandae repellat quibusdam quia harum. Maxime consectetur atque qui iste.',
                params: [
                    {
                        name: 'Крепкость',
                        value: 'Сильная'
                    },
                    {
                        name: 'Производитель',
                        value: 'Oden’s'
                    },
                    {
                        name: 'Никотин',
                        value: '22 м/г'
                    },
                    {
                        name: 'Порционность',
                        value: '13-15 шт'
                    },
                    {
                        name: 'Колличество в блоке',
                        value: '10 шт.'
                    },
                    {
                        name: 'Колличество в коробке',
                        value: '10 шт.'
                    },
                    {
                        name: 'Вид',
                        value: 'Табачный'
                    },
                    {
                        name: 'Вкус',
                        value: 'Мята'
                    }
                ]
            },
            tabToggle: true
        }
    }
}
</script>
