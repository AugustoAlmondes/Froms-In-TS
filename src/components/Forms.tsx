import { type User } from "../types/User";
import { useState, type FormEvent } from "react";
// import { FormEvent } from "react";
import { validate } from "../utils/validate";

export default function Forms() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState<User | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setErrors(null);


        const data: User = {
            name, email, agree
        }

        const validateErros = validate(data);

        if (Object.keys(validateErros).length > 0) {
            setErrors(validateErros);
            return;
        }

        setAgree(false);
        setName('');
        setEmail('');
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="name">Nome</label>
                <input className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400 bg-white" type="text" placeholder="Digite seu nome" value={name} onChange={e => setName(e.target.value)} />
            </div>
            {errors?.name && <small className="text-red-500 text-xs mt-1">{errors.name}</small>}
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="email">Email</label>
                <input className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400 bg-white" type="email" placeholder="Digite seu email"
                    value={email} onChange={e => setEmail(e.target.value)}
                />
            </div>
            {errors?.email && <small className="text-red-500 text-xs mt-1">{errors.email}</small>}
            <div className="flex flex-col">
                <a className="text-sx underline mb-2" href="#">Leia os Termos</a>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} />
                    <label className="text-sm" htmlFor="agree">Concordo com os Termos</label>
                </div>
                {errors?.agree && <small className="text-red-500 text-xs mt-1">{errors.agree}</small>}
            </div>
            <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 text-white roundedn-lg cursor-pointer">Cadastrar</button>
        </form>
    );
}