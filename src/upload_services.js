const upload_services = {
    "file.io": {
        name: "file.io",
        url: "https://file.io",
        filesDeletedAfterDownload: true,
        maxFileSize: "2 GB",
        supportsMultipleFiles: false,
        supportsExpiry: true,
        expiryPeriod: 0,
        privacyPolicy: "https://www.file.io/privacy/",
        tos: "https://www.file.io/tos/",
        expiryUnits: {
            h: "hours",
            d: "days",
            w: "weeks",
            m: "months",
            y: "years",
        },
    },
    "sample":{name:"sample"}
};

export default upload_services;
