<?php

namespace App\RepositoryInterfaces;

interface PersonRepositoryInterface
{
    public function allOrderByIdDesc();

    public function find($id);

    public function create(array $data);

    public function update($id, array $data);

    public function delete($id);
}
