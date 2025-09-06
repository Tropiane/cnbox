export const config = {
    pageTitle: "CNBOX",
    pagePresentation: "Dicen por ahí, que comer algo dulce alimenta el alma.",
    logoUrl:"https://drive.google.com/thumbnail?id=1PHDNfAi152nkOt829xcDRxCBYEfWfJWp&sz=w1000",
    contact: {
        city: "Montevideo",
        country: "Uruguay",
        email: "info@cnbox___.com",
        phone: "+598 99 123 456"
    },
    socialMedia: [
        {
            key: "instagram",
            url: "https://www.instagram.com/cn_box__/"
        }
    ],
    planData: [
        {
            title: "Letter cake",
            description: "Postre con forma de letra, hecho con masa de vainilla",
            link: "/plan-inicial",
            id: 1,
            position: "left",
            image: "1U29rRv3dlcLHCpkS45kuHjvz5zZmvCBR",
            details: ["Relleno de dulce de leche", "Decorado con crema de vainilla"]
        },
        {
            title: "Box de cupcakes",
            description: "Cupcakes rellenos y decorados con frase personalizada",
            link: "/plan-profesional",
            id: 2,
            position: "upper",
            image: "1RpXH4EbfxApyZ-ZLPavCDqw7v_ER-7Sk"
        },
        {
            title: "Oso de chocolate",
            description: "Relleno de golosinas, con martillo para romper y cookie personalizada",
            link: "/plan-corporativo",
            id: 3,
            position: "right",
            image: "1A7rGWXKdU6FbfYL6NuGK9cwp0IsTEfR_",
            details: ["Relleno de golosinas", "Con martillo para romper", "Cookie personalizada con frase"]
        }
    ],
    links: [
        {
            text: "Catálogo",
            url: "#catalogo",
            className: "green"
        },
        {
            text: "Preguntas Frecuentes",
            url: "/faq",
            className: "yellow"
        }
    ],
    navBarLinks: [
        {
            id:1,
            text: "Catálogo",
            link: "/catalogo",
            className: "green"
        },
        {
            id:2,
            text: "Preguntas Frecuentes",
            link: "/preguntas-frecuentes",
            className: "yellow"
        },
        {
            id:4,
            text: "Inicio",
            link: "/",
            className: "yellow"
        }
    ]
};
