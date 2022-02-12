<template>
    <div class="dark:bg-black-900 fixed top-0 z-50 w-[calc(100%-1rem)] bg-white">
        <div class="relative flex h-16 items-center">
            <div class="mx-auto">
                <svg
                    width="23"
                    height="28"
                    viewBox="0 0 23 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <rect width="23" height="28" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use
                                xlink:href="#image0_141_633"
                                transform="translate(0 -0.00258459) scale(0.00657895 0.00540414)"
                            />
                        </pattern>
                        <image
                            id="image0_141_633"
                            width="152"
                            height="186"
                            xlink:href="data:image/png;base64,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"
                        />
                    </defs>
                </svg>
            </div>
            <div class="absolute right-0 top-5 flex items-center">
                <div class="relative mr-3">
                    <span
                        class="bg-blueish absolute -top-2 -right-1.5 rounded-full px-1.5 text-xs font-semibold leading-5 text-white"
                    >
                        2
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 22"
                        fill="none"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="stroke-black-900 h-6 w-6 dark:stroke-white"
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
                <div class="relative mr-3">
                    <span
                        class="absolute -top-2 -right-1.5 rounded-full bg-red-500 px-1.5 text-xs font-semibold leading-5 text-white"
                    >
                        2
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 22"
                        fill="none"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="stroke-black-900 h-6 w-6 dark:stroke-white"
                    >
                        <path
                            d="M9.02009 1.91C5.71009 1.91 3.02009 4.6 3.02009 7.91V10.8C3.02009 11.41 2.76009 12.34 2.45009 12.86L1.30009 14.77C0.590088 15.95 1.08009 17.26 2.38009 17.7C6.69009 19.14 11.3401 19.14 15.6501 17.7C16.8601 17.3 17.3901 15.87 16.7301 14.77L15.5801 12.86C15.2801 12.34 15.0201 11.41 15.0201 10.8V7.91C15.0201 4.61 12.3201 1.91 9.02009 1.91Z"
                        />
                        <path
                            d="M10.8699 2.2C10.5599 2.11 10.2399 2.04 9.90992 2C8.94992 1.88 8.02992 1.95 7.16992 2.2C7.45992 1.46 8.17992 0.940002 9.01992 0.940002C9.85992 0.940002 10.5799 1.46 10.8699 2.2Z"
                        />
                        <path
                            d="M12.02 18.06C12.02 19.71 10.67 21.06 9.02002 21.06C8.20002 21.06 7.44002 20.72 6.90002 20.18C6.36002 19.64 6.02002 18.88 6.02002 18.06"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default { name: 'Navbar' }
</script>

<style></style>
