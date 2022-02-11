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
                                    d="M12.0012 2.58532L11.6606 2.26866C9.03258 -0.174079 4.9965 -0.0871424 2.46819 2.5333C-0.0609159 5.15705 -0.153368 9.3595 2.19514 12.0972L11.9986 22.2792L21.8044 12.0971C24.1528 9.35967 24.0619 5.16437 21.531 2.5329L12.0012 2.58532ZM12.0012 2.58532L12.3417 2.2684M12.0012 2.58532L12.3417 2.2684M12.3417 2.2684C14.9616 -0.170604 19.0054 -0.0903328 21.5308 2.53274L12.3417 2.2684Z"
                                    fill="white"
                                    stroke="white"
                                />
                            </svg>
                        </div>
                        <div class="mb-3">
                            <svg
                                width="26"
                                height="25"
                                viewBox="0 0 26 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 24H25"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M1.5 8.20003C1.5 7.92388 1.72386 7.70003 2 7.70003H5.33333C5.60948 7.70003 5.83333 7.92388 5.83333 8.20003V20.6C5.83333 20.8762 5.60948 21.1 5.33333 21.1H2C1.72386 21.1 1.5 20.8762 1.5 20.6V8.20003ZM20.1667 1C20.1667 0.723859 20.3905 0.500002 20.6667 0.500002L24 0.50001C24.2761 0.500011 24.5 0.723869 24.5 1.00001V20.6C24.5 20.8762 24.2761 21.1 24 21.1H20.6667C20.3905 21.1 20.1667 20.8762 20.1667 20.6V1ZM10.8333 4.60002C10.8333 4.32388 11.0572 4.10002 11.3333 4.10002L14.6667 4.10002C14.9428 4.10001 15.1667 4.32387 15.1667 4.60002V20.6C15.1667 20.8762 14.9428 21.1 14.6667 21.1H11.3333C11.0572 21.1 10.8333 20.8762 10.8333 20.6V4.60002Z"
                                    fill="white"
                                    stroke="white"
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
