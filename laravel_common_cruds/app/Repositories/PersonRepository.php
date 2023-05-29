<?php

namespace App\Repositories;

use App\Models\Person;
use App\RepositoryInterfaces\PersonRepositoryInterface;

class PersonRepository implements PersonRepositoryInterface
{
    public function allOrderByIdDesc()
    {
        return Person::orderBy('id', 'desc')->get();
    }

    public function find($id)
    {
        return Person::find($id);
    }

    public function create(array $data)
    {
        return Person::create($data);
    }

    public function update($id, array $data)
    {
        return Person::find($id)->update($data);
    }

    public function delete($id)
    {
        return Person::destroy($id);
    }
}
