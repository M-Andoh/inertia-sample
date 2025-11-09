import Authenticated from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props extends PageProps {
    users: User[];
}

export default function UsersIndex({ users }: Props) {
    return (
        <Authenticated>
            <Head title="Users" />
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold text-gray-100">
                    User List
                </h1>
                <table className="min-w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2 text-sm text-gray-100">
                                    {user.id}
                                </td>
                                <td className="border px-4 py-2 text-sm text-gray-100">
                                    {user.name}
                                </td>
                                <td className="border px-4 py-2 text-sm text-gray-100">
                                    {user.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
}
