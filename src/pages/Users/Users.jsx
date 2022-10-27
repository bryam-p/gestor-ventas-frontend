import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

export const Users = () => {


    const { data, loading } = useFetch('http://localhost:4000/api/user');

    const [users, setUsers] = useState([])

    useEffect(() => {
        if (!loading) {
            console.log('data', data);
            setUsers(data);
        }
    }, [data, loading])

    return (<div className="flex flex-col">
        <div className="-my-2 overflow-x-auto mt-4">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Usuario
                                </th>

                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Estado
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Rol
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map(person => (
                                <tr key={person.id_user}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/150?u=a0425879${person.id_user}`} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{person.name} {person.last_name}</div>
                                                <div className="text-sm text-gray-500">{person.email}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">

                                        {
                                            person.state ? <span
                                                className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
                                            >
                                                Activo
                                            </span>
                                                :
                                                <span
                                                    className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-red-100 text-red-800"
                                                >
                                                    Inactivo
                                                </span>
                                        }
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {person.rol}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
}