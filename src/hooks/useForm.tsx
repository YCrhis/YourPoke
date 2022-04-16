import { ChangeEvent, useState } from "react"

export const useForm = (value: any) => {

    const [data, setData] = useState<any>(value);

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setData({
            ...data,
            [name]: value
        })
    }

    return {
        data, handleInputChange
    }
}
