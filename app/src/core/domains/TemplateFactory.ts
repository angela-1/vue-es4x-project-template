enum GenerateType {
    Doc,
    Signature
}

enum DocStyle {
    Draft,
    Final
}

enum SignatureStyle {
    Single,
    Group
}

type GenerateStyle = DocStyle | SignatureStyle;

interface TemplateFactory {
    type: GenerateType;
    style: GenerateStyle;
    title: string;
    subtitle?: string;
    addr?: string;
    sendDate: string | Date;
}


export { TemplateFactory, GenerateType, DocStyle, SignatureStyle };