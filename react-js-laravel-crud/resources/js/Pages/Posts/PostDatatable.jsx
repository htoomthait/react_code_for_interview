import React from "react";
import AuthenticatedLayout from "@/Layouts/Authenticated";
import { Head, usePage, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import DataTable from "react-data-table-component";

const Dashboard = (props) => {
    const dataSource = "{{posts.datatable.data}}";

    // function destroy(e) {
    //     if (confirm("Are you sure you want to delete this user?")) {
    //         Inertia.delete(route("posts.destroy", e.currentTarget.id));
    //     }
    // }

    const columns = [
        {
            name: "id",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "title",
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: "body",
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: "action",
            selector: (row) => row.action,
        },
    ];

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Posts List" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("posts.create")}
                                >
                                    Create Post
                                </Link>
                            </div>

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Body</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
