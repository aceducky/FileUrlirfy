function Info({ provider }) {
    return (
        <div>
            <p>Max file size: {provider.maxFileSize}</p>
            <p>
                <a href={provider.privacyPolicy}>Privacy policy </a>
            </p>
            {provider.tos && (
                <p>
                    <a href={provider.tos}> Terms of service</a>
                </p>
            )}
            {provider.filesDeletedAfterDownload && (
                <p>Files are deleted once they are downloaded</p>
            )}
        </div>
    );
}

export default Info;
