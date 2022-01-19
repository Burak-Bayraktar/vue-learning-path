<template>
    <div class="container">
        <div class="header">
            <h1>
                <slot name="title" />
            </h1>
        </div>
        <div class="content">
            <slot name="content" />
            <slot />
        </div>
        <div class="footer text-right">
            <button class="btn-sm mr-2">Kapat</button>
            <button class="btn-sm ml-5 green">Kaydet</button>
        </div>
    </div>
</template>