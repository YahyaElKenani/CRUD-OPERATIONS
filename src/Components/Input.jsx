export default function Input({icon, type, placeholder, onChange, label, value}) { 
    return ( 
        <div className="flex flex-col gap-1">   
            <label className="ms-10 text-lg opacity-50"> 
                {label}
            </label>
            <div className="flex items-center gap-3 w-full"> 
                <span className="text-2xl cursor-pointer"> 
                    {icon}
                </span>
                <input type={type} placeholder={placeholder} onChange={onChange} className="p-3 border border-gray-300 w-full text-lg rounded-sm"
                value={value}
                />
            </div>
        </div>
    )
}