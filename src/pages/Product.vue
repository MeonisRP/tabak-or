<template>
    <div class="my-16 flex h-[calc(100vh-8rem)] flex-col p-2">
        <div class="relative flex flex-col">
            <div class="absolute top-0 left-0 w-full">
                <div class="flex justify-between p-2">
                    <span class="h-6 bg-black-200 px-2 py-1 leading-4 text-black-800">
                        {{ product.status === 'Доступно' ? 'В наличии' : 'Нет в наличии' }}
                    </span>
                    <div class="flex flex-col">
                        <div class="mb-3">
                            <svg
                                width="24"
                                height="23"
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.2489 2.25938C21.0652 0.802382 19.423 0 17.625 0C15.0962 0 13.4952 1.63832 12.5974 3.01275C12.3645 3.3694 12.1664 3.72701 12 4.06352C11.8336 3.72701 11.6355 3.3694 11.4026 3.01275C10.5048 1.63832 8.90381 0 6.375 0C4.57697 0 2.9348 0.802433 1.75102 2.25943C0.621891 3.64931 0 5.51076 0 7.50085C0 9.66713 0.779672 11.682 2.45367 13.8416C3.94978 15.7718 6.10214 17.7614 8.59453 20.0653C9.52327 20.9238 10.4837 21.8116 11.5062 22.782L11.5369 22.8112C11.6694 22.9371 11.8347 23 12 23C12.1653 23 12.3306 22.937 12.4631 22.8112L12.4938 22.782C13.5163 21.8116 14.4767 20.9238 15.4056 20.0652C17.8979 17.7614 20.0502 15.7718 21.5463 13.8416C23.2203 11.6819 24 9.66713 24 7.50085C24 5.51076 23.3781 3.64931 22.2489 2.25938ZM14.4934 18.9042C13.6928 19.6442 12.8688 20.4059 12 21.2252C11.1312 20.406 10.3072 19.6443 9.50644 18.9041C4.62867 14.3952 1.40625 11.4165 1.40625 7.50085C1.40625 5.88236 1.90336 4.37909 2.80603 3.268C3.71906 2.14431 4.98652 1.52544 6.375 1.52544C8.30292 1.52544 9.54919 2.81383 10.2551 3.89466C10.8884 4.86402 11.2188 5.84122 11.3315 6.21633C11.4257 6.53031 11.6956 6.74281 12 6.74281C12.3044 6.74281 12.5743 6.53031 12.6685 6.21633C12.7812 5.84122 13.1116 4.86402 13.7449 3.89461C14.4508 2.81383 15.6971 1.52544 17.625 1.52544C19.0135 1.52544 20.2809 2.14431 21.1939 3.268C22.0966 4.37909 22.5938 5.88236 22.5938 7.50085C22.5938 11.4165 19.3713 14.3952 14.4934 18.9042Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div class="mb-3">
                            <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 23L24 23" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M2.3889 7.5H4.6111C5.16006 7.5 5.5 7.88446 5.5 8.22411V18.7759C5.5 19.1155 5.16006 19.5 4.6111 19.5H2.3889C1.83994 19.5 1.5 19.1155 1.5 18.7759V8.22411C1.5 7.88446 1.83994 7.5 2.3889 7.5Z"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M11.3889 4.5H13.6111C14.1876 4.5 14.5 4.87857 14.5 5.15858V18.8414C14.5 19.1214 14.1876 19.5 13.6111 19.5H11.3889C10.8124 19.5 10.5 19.1214 10.5 18.8414V5.15858C10.5 4.87857 10.8124 4.5 11.3889 4.5Z"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20.3889 0.5H22.6111C23.1799 0.5 23.5 0.880142 23.5 1.17647V18.8235C23.5 19.1199 23.1799 19.5 22.6111 19.5H20.3889C19.8201 19.5 19.5 19.1199 19.5 18.8235V1.17647C19.5 0.880142 19.8201 0.5 20.3889 0.5Z"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-40 bg-black-800">
                <img :src="product.image" alt="" class="h-full w-full object-contain" />
            </div>
            <div class="flex justify-between">
                <div class="mr-2 w-1/3 rounded-lg bg-black-800 p-2">
                    <img src="../products/1.png" alt="" class="h-full w-full object-contain" />
                </div>
                <div class="mr-2 w-1/3 rounded-lg bg-black-800 p-2">
                    <img src="../products/1.png" alt="" class="h-full w-full object-contain" />
                </div>
                <div class="mr-2 w-1/3 rounded-lg bg-black-800 p-2 last:mr-0">
                    <img src="../products/1.png" alt="" class="h-full w-full object-contain" />
                </div>
            </div>
        </div>
        <h1 class="text-lg font-semibold">{{ product.name }}</h1>
        <div class="flex justify-between">
            <div class="flex items-center">
                <span class="mr-1">4.5</span>
                <div class="flex">
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            fill="white"
                        />
                    </svg>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            fill="white"
                        />
                    </svg>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            fill="white"
                        />
                    </svg>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            fill="white"
                        />
                    </svg>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                            fill="url(#paint0_linear_275_1372)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_275_1372"
                                x1="6.5"
                                y1="5"
                                x2="5"
                                y2="5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.330729" stop-color="#707070" />
                                <stop offset="0.354167" stop-color="white" />
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
                    :class="{ 'border-b border-blueish': tabToggle }"
                >
                    Характеристики
                </h2>
                <h2
                    @click="tabToggle = !tabToggle"
                    class="my-1 mx-2 py-1"
                    :class="{ 'border-b border-blueish': !tabToggle }"
                >
                    Описание
                </h2>
            </div>
            <ul v-if="tabToggle" class="flex list-disc flex-col">
                <li
                    v-for="param in product.params"
                    :key="param.name"
                    class="flex justify-between pl-4 odd:bg-black-800"
                >
                    <span>{{ param.name }}</span>
                    <span>{{ param.value }}</span>
                </li>
            </ul>
            <div v-else>
                <p>{{ product.description }}</p>
            </div>
        </div>
        <div class="mx-auto mt-auto flex w-3/4 flex-col">
            <div class="mb-1 flex h-8 items-center justify-between">
                <button class="mr-1 w-full rounded border border-black-700 px-2 py-1 text-xs text-black-700">
                    Блок
                </button>
                <button class="mr-1 w-full rounded border border-black-700 bg-blueish px-2 py-1 text-xs">
                    Коробка
                </button>
                <button @click="product.boxes--" class="rounded bg-black-700 px-3 py-1 text-xs">-</button>
                <span class="mx-2">{{ product.boxes }}</span>
                <button @click="product.boxes++" class="rounded bg-black-700 px-3 py-1 text-xs">+</button>
            </div>
            <button class="mb-3 rounded border border-black-700 bg-blueish py-1">Добавить в корзину</button>
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
