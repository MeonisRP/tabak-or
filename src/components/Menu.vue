<template>
    <div class="border-black-900 dark:bg-black-900 fixed bottom-0 w-[calc(100%-1rem)] border-t bg-white">
        <div class="relative grid h-16 grid-cols-4 items-center border-t border-white">
            <router-link to="/catalog" class="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                    width="15"
                    height="15"
                    fill="none"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-black-500 mb-0.5 h-6 w-6 dark:stroke-white"
                >
                    <path
                        d="M3.125 6.25H4.375C5.625 6.25 6.25 5.625 6.25 4.375V3.125C6.25 1.875 5.625 1.25 4.375 1.25H3.125C1.875 1.25 1.25 1.875 1.25 3.125V4.375C1.25 5.625 1.875 6.25 3.125 6.25Z"
                    />
                    <path
                        d="M10.625 6.25H11.875C13.125 6.25 13.75 5.625 13.75 4.375V3.125C13.75 1.875 13.125 1.25 11.875 1.25H10.625C9.375 1.25 8.75 1.875 8.75 3.125V4.375C8.75 5.625 9.375 6.25 10.625 6.25Z"
                    />
                    <path
                        d="M10.625 13.75H11.875C13.125 13.75 13.75 13.125 13.75 11.875V10.625C13.75 9.375 13.125 8.75 11.875 8.75H10.625C9.375 8.75 8.75 9.375 8.75 10.625V11.875C8.75 13.125 9.375 13.75 10.625 13.75Z"
                    />
                    <path
                        d="M3.125 13.75H4.375C5.625 13.75 6.25 13.125 6.25 11.875V10.625C6.25 9.375 5.625 8.75 4.375 8.75H3.125C1.875 8.75 1.25 9.375 1.25 10.625V11.875C1.25 13.125 1.875 13.75 3.125 13.75Z"
                    />
                </svg>
                <span class="text-xs">Каталог</span>
            </router-link>
            <router-link to="/cart" class="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17 17"
                    width="17"
                    height="17"
                    fill="none"
                    stroke="#8D8E90"
                    stroke-opacity="0.6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-black-500 mb-0.5 h-6 w-6 dark:stroke-white"
                >
                    <path
                        d="M7.42884 15.9999C8.02057 15.9999 8.50026 15.5202 8.50026 14.9285C8.50026 14.3368 8.02057 13.8571 7.42884 13.8571C6.83711 13.8571 6.35742 14.3368 6.35742 14.9285C6.35742 15.5202 6.83711 15.9999 7.42884 15.9999Z"
                    />
                    <path
                        d="M13.8571 15.9999C14.4488 15.9999 14.9285 15.5202 14.9285 14.9285C14.9285 14.3368 14.4488 13.8571 13.8571 13.8571C13.2653 13.8571 12.7856 14.3368 12.7856 14.9285C12.7856 15.5202 13.2653 15.9999 13.8571 15.9999Z"
                    />
                    <path
                        d="M1 1H3.72727L5.55455 10.5641C5.68323 11.2428 6.25776 11.7273 6.91818 11.714H13.5455C14.2059 11.7273 14.7804 11.2428 14.9091 10.5641L16 4.57134H4.40909"
                    />
                </svg>
                <span class="text-xs">Корзина</span>
            </router-link>
            <router-link to="/profile" class="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13 14"
                    width="13"
                    height="14"
                    fill="none"
                    stroke-opacity="0.6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-black-500 mb-0.5 h-6 w-6 dark:stroke-white"
                >
                    <path
                        d="M11.5 4.15625V10.25C11.5 12.125 10.3813 12.75 9 12.75H4C2.61875 12.75 1.5 12.125 1.5 10.25V4.15625C1.5 2.125 2.61875 1.65625 4 1.65625C4 2.04375 4.15623 2.39375 4.41248 2.65C4.66873 2.90625 5.01875 3.0625 5.40625 3.0625H7.59375C8.36875 3.0625 9 2.43125 9 1.65625C10.3813 1.65625 11.5 2.125 11.5 4.15625Z"
                    />
                    <path d="M4 7.125H6.5" />
                    <path d="M4 9.625H9" />
                </svg>
                <span class="text-xs">Отчеты</span>
            </router-link>
            <router-link to="/profile" class="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13 15"
                    width="13"
                    height="15"
                    fill="none"
                    stroke-opacity="0.6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-black-500 mb-0.5 h-6 w-6 dark:stroke-white"
                >
                    <path
                        d="M6.5 7.5C8.22589 7.5 9.625 6.10089 9.625 4.375C9.625 2.64911 8.22589 1.25 6.5 1.25C4.77411 1.25 3.375 2.64911 3.375 4.375C3.375 6.10089 4.77411 7.5 6.5 7.5Z"
                    />
                    <path
                        d="M11.8688 13.75C11.8688 11.3313 9.4626 9.375 6.5001 9.375C3.5376 9.375 1.13135 11.3313 1.13135 13.75"
                    />
                </svg>
                <span class="text-xs">Профиль</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default { name: 'Menu' }
</script>
