<template>
    <div class="relative flex flex-col">
        <div class="dark:bg-black-900 sticky top-16 flex w-full flex-col bg-white px-2">
            <div class="flex border-b pb-4 text-lg font-semibold">
                Ваш баланс: <span class="ml-1 text-green-500">1523 ₽</span>
            </div>
        </div>
        <div class="mt-16 mb-16">
            <div v-for="product in products" :key="product.id" class="px-2 font-light">
                <div class="border-black-600 flex justify-between border-b py-2 text-sm">
                    <div class="mr-2 flex w-3/12">
                        <img :src="product.image" alt="" class="h-full w-full object-contain" />
                    </div>
                    <div class="mr-2 flex w-7/12 flex-col">
                        <router-link to="/product">{{ product.name }}</router-link>
                        <div class="mb-4">
                            Наличие: <span class="text-green-600">{{ product.status }}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-white">
                            <div class="flex flex-col justify-between">
                                <button
                                    class="dark:bg-blueish text-black-900 border-black-900 mb-3 rounded border dark:text-white"
                                >
                                    Блок
                                </button>
                                <div class="flex justify-between">
                                    <button @click="product.blocks--" class="dark:bg-blueish bg-black-900 rounded px-3">
                                        -
                                    </button>
                                    <span class="text-black-900 dark:text-white">{{ product.blocks }}</span>
                                    <button @click="product.blocks++" class="dark:bg-blueish bg-black-900 rounded px-3">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-col justify-between text-white">
                                <button
                                    class="bg-black-300 dark:bg-black-900 dark:border-black-700 dark:text-black-700 mb-3 rounded border border-white"
                                >
                                    Коробка
                                </button>
                                <div class="flex justify-between">
                                    <button
                                        @click="product.boxes--"
                                        class="bg-black-300 dark:bg-black-700 rounded px-3"
                                    >
                                        -
                                    </button>
                                    <span class="text-black-300">{{ product.boxes }}</span>
                                    <button
                                        @click="product.boxes++"
                                        class="bg-black-300 dark:bg-black-700 rounded px-3"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-2/12 flex-col items-end">
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
                        <span class="text-lg font-semibold">{{ product.price }} ₽</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="dark:bg-black-900 sticky bottom-16 z-50 h-12 w-full bg-white">
            <div class="dark:border-blueish border-black-900 flex h-full items-center justify-start border-y text-sm">
                <div class="flex h-full w-1/2 flex-col items-start justify-center px-1">
                    <span>2400 ₽</span>
                    <span class="text-black-700 text-xs">{{ products.length }} товар(-ов)</span>
                </div>
                <router-link
                    to="/cart"
                    class="dark:bg-blueish bg-black-900 flex h-full w-1/2 items-center justify-center px-1 text-white"
                >
                    Перейти к оформлению
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 2,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 3,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 4,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 5,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 6,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                }
            ]
        }
    }
}
</script>
